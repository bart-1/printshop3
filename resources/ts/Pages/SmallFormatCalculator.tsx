import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import ContentBoxSection from "../Components/ContentBoxSection";
import RadioInputsSection from "../Components/RadioInputsSection";
import { Head, Link, usePage } from "@inertiajs/react";
import MasterLayout, { InertiaProps } from "../Layouts/MasterLayout";
import { discontTester, findElemntInJSONString } from "../helpers";

interface SmallFormatCalculatorProps {
    className: string;
}

type SubstratePrices = {
    name: string;
    price: number;
};
type ColorPrintPrices = {
    threshold_from: number;
    threshold_to: number;
    price: number;
};
type FoldStaplePrices = {
    threshold_from: number;
    threshold_to: number;
    staple: number;
    fold: number;
    binder_staple: number;
};
type MinPrices = {
    small_cut_min: number;
    roll_lamin_min: number;
    plotter_cut_min: number;
    laser_cut_min: number;
    cut_min: number;
};
type LaminationPrices = {
    threshold_from: number;
    threshold_to: number;
    a4_roll_mat: number;
    a4_roll_gloss: number;
    a4_roll_soft: number;
    a3_100mic: number;
    a3_250mic: number;
    a4_100mic: number;
    a4_250mic: number;
    a5_100mic: number;
    a5_250mic: number;
    a6_100mic: number;
    a6_250mic: number;
    bc_200mic: number;
};

interface ColorCalc extends InertiaProps {
    substratePrices: SubstratePrices[];
    colorPrintPrices: ColorPrintPrices[];
    foldStaple: FoldStaplePrices[];
    minPrices: MinPrices[];
    laminationPrices: LaminationPrices[];
}

type Lamination = "none" | "mat" | "gloss" | "soft";

const SmallFormatCalculator = ({ className }: SmallFormatCalculatorProps) => {
    const {
        substratePrices,
        colorPrintPrices,
        foldStaple,
        minPrices,
        laminationPrices,
    } = usePage<ColorCalc>().props;
    const { auth } = usePage<InertiaProps>().props;

    const [quantity, setQuantity] = useState(1);
    const [printSidesMultiplier, setPrintSidesMultiplier] = useState(1);
    const [formatMultiplier, setFormatMultiplier] = useState(2);
    const [substratePrice, setSubstatePrice] = useState(0);
    const [pagesA4Quantity, setPagesA4Quantity] = useState(2);
    const [sheetsA4Quantity, setSheetsA4Quantity] = useState(1);
    const [a4PrintPrice, setA4PrintPrice] = useState(0);
    const [result, setResult] = useState(0);
    const [laminType, setLaminType] = useState<Lamination>("none");
    const [laminSingleRow, setLaminSingleRow] =
        useState<LaminationPrices | null>(null);
    const [laminPrice, setLaminPrice] = useState(0);

    //inignition
    useEffect(() => {
        setFormatMultiplier(2);
        setQuantity(1);
        setPrintSidesMultiplier(1);
        setSheetsA4Quantity(2);
        setPagesA4Quantity(2);
        setLaminType("none");
    }, []);

    useEffect(() => {
        const count = Math.ceil(quantity / formatMultiplier) * 2;
        setSheetsA4Quantity(count);
        setPagesA4Quantity(count * printSidesMultiplier);
    }, [printSidesMultiplier, formatMultiplier, quantity]);

    useEffect(() => {
        const printPrice = colorPrintPrices?.filter((el) => {
            if (
                el.threshold_from <= pagesA4Quantity &&
                el.threshold_to >= pagesA4Quantity
            )
                return el;
        });

        setA4PrintPrice(printPrice[0].price);
        const laminationPrice = laminationPrices?.filter((el) => {
            if (
                el.threshold_from <= sheetsA4Quantity &&
                el.threshold_to >= sheetsA4Quantity
            )
                return el;
        });
        setLaminSingleRow(laminationPrice[0]);
    }, [pagesA4Quantity, sheetsA4Quantity]);

    //set lamination price
    useEffect(() => {
        if (laminSingleRow !== null) {
            switch (laminType) {
                case "gloss":
                    setLaminPrice(laminSingleRow["a4_roll_gloss"]);
                    break;
                case "mat":
                    setLaminPrice(laminSingleRow["a4_roll_mat"]);
                    break;
                case "soft":
                    setLaminPrice(laminSingleRow["a4_roll_soft"]);
                    break;
                case "none":
                    setLaminPrice(0);
                    break;
            }
        }
    }, [laminSingleRow, laminType]);

    useEffect(() => {
        const substrate = sheetsA4Quantity * substratePrice;
        const print = pagesA4Quantity * a4PrintPrice;
        const cut = minPrices[0].cut_min;
        const laminationP =
            sheetsA4Quantity * laminPrice >= minPrices[0].roll_lamin_min ||
            sheetsA4Quantity * laminPrice === 0
                ? sheetsA4Quantity * laminPrice
                : minPrices[0].roll_lamin_min;
        setResult(substrate + print + cut + laminationP);
    }, [
        a4PrintPrice,
        substratePrice,
        laminPrice,
        sheetsA4Quantity,
        pagesA4Quantity,
    ]);

    const subtratesList = substratePrices?.map((el, index) => (
        <option key={index} value={el.price}>
            {el.name}
        </option>
    ));

    return (
        <div className={className}>
            <Head title="Small Format Calc" />

            <Link
                href={"welcome"}
                as="button"
                className=" dark:border-red-500 dark:hover:bg-red-700 dark:text-white bg-blue-400 border-2 border-indigo-950 dark:bg-red-800/20 hover:bg-blue-200 p-2 mb-3 rounded-md"
            >
                {"< back"}
            </Link>
            <div>
                <ContentBoxSection>
                    <div className="flex gap-2">
                        <fieldset className="w-[50%] border-2 border-indigo-950 dark:border-white p-3 gap-3 flex justify-center">
                            <legend className="px-2">quantity </legend>
                            <input
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    switch (true) {
                                        case Number(e.currentTarget.value) >
                                            0 &&
                                            Number(e.currentTarget.value) <=
                                                10000:
                                            setQuantity(
                                                Number(e.currentTarget.value)
                                            );
                                            break;
                                        case Number(e.currentTarget.value) <= 0:
                                            setQuantity(1);
                                            break;
                                        case Number(e.currentTarget.value) >
                                            10000:
                                            setQuantity(10000);
                                            break;
                                        default:
                                            setQuantity(1);
                                    }
                                }}
                                className="w-fit p-0 text-center dark:text-black"
                                value={quantity}
                                type="number"
                            />
                        </fieldset>
                        <fieldset className="w-[50%] border-2 border-indigo-950 dark:border-white p-3 gap-3 flex justify-center">
                            <legend className="px-2">substrates </legend>
                            <select
                                onChange={(e) =>
                                    setSubstatePrice(
                                        Number(e.currentTarget.value)
                                    )
                                }
                            >
                                {subtratesList}
                            </select>
                        </fieldset>
                    </div>
                    <div className="flex flex-row gap-2 h-28">
                        <fieldset className="border-2 placeholder:selection:border-2 border-indigo-950 dark:border-white p-3  flex justify-center items-center">
                            <legend className="px-2">sheets </legend>
                            {sheetsA4Quantity}
                        </fieldset>
                        <fieldset className=" border-2 border-indigo-950 dark:border-white p-3 items-center flex justify-center">
                            <legend className="px-2">pages </legend>
                            {pagesA4Quantity}
                        </fieldset>
                        <fieldset className="border-2 border-indigo-950 dark:border-white p-3 items-center flex justify-center">
                            <legend className="px-2">substrate </legend>
                            {substratePrice}
                        </fieldset>
                        <fieldset className=" border-2 border-indigo-950 dark:border-white p-3 items-center flex justify-center">
                            <legend className="px-2">print </legend>
                            {a4PrintPrice}
                        </fieldset>
                        <fieldset className=" border-2 border-indigo-950 dark:border-white p-3 items-center flex justify-center">
                            <legend className="px-2">lamin </legend>
                            {/* {laminPrice} */}
                            <div className="">
                                {sheetsA4Quantity * laminPrice >=
                                    minPrices[0].roll_lamin_min ||
                                sheetsA4Quantity * laminPrice === 0 ? (
                                    <>
                                        <div>A4:</div>{" "}
                                        <div>{laminPrice}</div>
                                    </>
                                ) : (
                                    <>
                                        <div>min:</div>{" "}
                                        <div>{minPrices[0].roll_lamin_min}</div>
                                    </>
                                )}
                            </div>
                        </fieldset>
                    </div>

                    <RadioInputsSection
                        legend="format"
                        output={(e) => {
                            setFormatMultiplier(Number(e));
                        }}
                        className="border-2 border-indigo-950 dark:border-white p-3 gap-5 flex "
                        defaultCheckedValue="2"
                        radioInputsGroup={[
                            {
                                value: "16",
                                id: "a7",
                                className: "",
                                fieldName: "A7",
                            },
                            {
                                value: "8",
                                id: "a6",
                                className: "",
                                fieldName: "A6",
                            },
                            {
                                value: "4",
                                id: "a5",
                                className: "",
                                fieldName: "A5",
                            },
                            {
                                value: "2",
                                id: "a4",
                                className: "",
                                fieldName: "A4",
                            },
                            {
                                value: "1",
                                id: "a3",
                                className: "",
                                fieldName: "A3",
                            },
                        ]}
                    />
                    <RadioInputsSection
                        legend="print"
                        output={(e) => {
                            setPrintSidesMultiplier(Number(e));
                        }}
                        className="border-2 border-indigo-950 dark:border-white p-3 gap-3 flex"
                        defaultCheckedValue="1"
                        radioInputsGroup={[
                            {
                                value: "1",
                                id: "40",
                                className: "",
                                fieldName: "4+0",
                            },
                            {
                                value: "2",
                                id: "44",
                                className: "",
                                fieldName: "4+4",
                            },
                        ]}
                    />
                    <RadioInputsSection
                        legend="foil laminate 1+1"
                        output={(e) => setLaminType(e as Lamination)}
                        className="border-2 border-indigo-950 dark:border-white p-3 gap-3 flex"
                        defaultCheckedValue="none"
                        radioInputsGroup={[
                            {
                                value: "none",
                                id: "mone",
                                className: "",
                                fieldName: "none",
                            },
                            {
                                value: "mat",
                                id: "mat",
                                className: "",
                                fieldName: "mat",
                            },
                            {
                                value: "gloss",
                                id: "gloss",
                                className: "",
                                fieldName: "gloss",
                            },

                            {
                                value: "soft",
                                id: "soft",
                                className: "",
                                fieldName: "soft touch",
                            },
                        ]}
                    />

                    <ContentBoxSection className="mt-4">
                        <div className="text-4xl">
                            PLN Brutto: {parseFloat(String(result)).toFixed(2)}
                            ,-{" "}
                        </div>
                        <div className="text-xl">
                            PLN Netto:{" "}
                            {parseFloat(String(result / 1.23)).toFixed(2)},-{" "}
                        </div>
                        {auth.user !== null && auth.user.discount > 0 ? (
                            <div className=" right-0 ">
                                Twój rabat STAŁEGO KLIENTA został uwzględniony{" "}
                                {auth.user.discount}%
                            </div>
                        ) : (
                            ""
                        )}
                    </ContentBoxSection>
                </ContentBoxSection>
            </div>
        </div>
    );
};

SmallFormatCalculator.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default SmallFormatCalculator;
