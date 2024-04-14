import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import ContentBoxSection from "../Components/ContentBoxSection";
import RadioInputsSection from "../Components/RadioInputsSection";
import { Head, Link, usePage } from "@inertiajs/react";
import MasterLayout, { InertiaProps } from "../Layouts/MasterLayout";

interface BcCalculatorProps {
    className: string;
}

export type Print = "one_side" | "both_side";
export type Laminate = "mat" | "gloss" | "soft" | "none" | "mix";

type PricesBC = {
    id: number;
    // created_at: string | null;
    // updated_at: string | null;
    tresholds: number;
    one_side: number;
    both_side: number;
    mat: number;
    gloss: number;
    mix: number;
    none: number;
    soft: number;
};
interface Prices extends InertiaProps {
    prices: PricesBC[];
}

const BcCalculator = ({ className }: BcCalculatorProps) => {
    const [quantity, setQuantity] = useState(100);
    const [printSides, setPrintSides] = useState<keyof PricesBC>();
    const [laminate, setLaminate] = useState<keyof PricesBC>();
    const [result, setResult] = useState(0);

    const { prices } = usePage<Prices>().props;
    const { auth } = usePage<InertiaProps>().props;

    useEffect(() => {
        setPrintSides("one_side");
        setLaminate("none");
    }, []);

    useEffect(() => {
        const quantityFilter = prices.filter((el) => el.tresholds === quantity);


        if(printSides && laminate)
        setResult(
            quantityFilter[0][printSides] + quantityFilter[0][laminate]
        );

    }, [quantity, printSides, laminate]);

    return (
        <div className={className}>
            <Head title="BC Calc" />

            <Link
                href={"welcome"}
                as="button"
                className=" dark:border-red-500 dark:hover:bg-red-700 dark:text-white bg-blue-400 border-2 border-indigo-950 dark:bg-red-800/20 hover:bg-blue-200 p-2 mb-3 rounded-md"
            >
                {"< back"}
            </Link>
            <div>
                <ContentBoxSection>
                    <fieldset className="w-[200px] border-2 border-indigo-950 dark:border-white p-3 gap-3 flex">
                        <legend className="px-2">quantity </legend>

                        <input
                            className="w-[70%]"
                            id="bc-qantity"
                            type="range"
                            min={100}
                            max={1000}
                            step={100}
                            value={quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setQuantity(Number(e.currentTarget.value))
                            }
                        />
                        <input
                            className="w-[30%] p-0 text-center dark:text-black"
                            value={quantity}
                            disabled
                        />
                    </fieldset>

                    <RadioInputsSection
                        legend="print"
                        output={(e) => setPrintSides(e as keyof PricesBC)}
                        className="border-2 border-indigo-950 dark:border-white p-3 gap-3 flex"
                        defaultCheckedValue="one_side"
                        radioInputsGroup={[
                            {
                                value: "one_side",
                                id: "40",
                                className: "",
                                fieldName: "4+0",
                            },
                            {
                                value: "both_side",
                                id: "44",
                                className: "",
                                fieldName: "4+4",
                            },
                        ]}
                    />
                    <RadioInputsSection
                        legend="foil laminate 1+1"
                        output={(e) => setLaminate(e as keyof PricesBC)}
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
                                value: "mix",
                                id: "gloss",
                                className: "",
                                fieldName: "mat+gloss",
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
                        <div className="text-4xl">PLN Brutto: {result},- </div>
                        <div className="text-xl">
                            PLN Netto:{" "}
                            {parseFloat(String(result / 1.23)).toFixed(2)},-{" "}
                        </div>
                    </ContentBoxSection>
                </ContentBoxSection>
            </div>
        </div>
    );
};

BcCalculator.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default BcCalculator;
