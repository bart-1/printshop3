import {  Head } from "@inertiajs/react";
import ContentBoxSection from "../Components/ContentBoxSection";
import {
    BsCreditCard2Front,
    BsFileEarmarkImage,
    BsLayoutWtf,
    BsStickies,
} from "react-icons/bs";
import { ReactNode } from "react";
import MasterLayout from "../Layouts/MasterLayout";



const Welcome = () => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center  selection:bg-red-500 selection:text-white">


                <div className="max-w-7xl mx-auto p-6 lg:p-8">


                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <ContentBoxSection
                                icon={<BsStickies />}
                                title="Druk małoformatowy"
                            >
                                A3, A4, A5, A6 itd. (zaproszenia, ulotki,
                                plakaty, broszury, identyfikatory).
                            </ContentBoxSection>
                            <ContentBoxSection
                                icon={<BsCreditCard2Front />}
                                title="Wizytówki"
                            >
                                Maksymalny rozmiar 95x60 mm.
                            </ContentBoxSection>
                            <ContentBoxSection
                                icon={<BsLayoutWtf />}
                                title="Druk lateksowy - naklejki"
                            >
                                {" "}
                                Wszystkie naklejki nacinane ploterowo, w
                                arkuszach zbiorczych lub cięte na sztuki.
                            </ContentBoxSection>
                            <ContentBoxSection
                                icon={<BsFileEarmarkImage />}
                                title="Druk wielkoformatowy"
                            >
                                Plakaty, naklejki wielkoformatowe.
                            </ContentBoxSection>
                        </div>
                    </div>


                </div>
            </div>


        </>
    );
}

Welcome.layout = (page: ReactNode | ReactNode[]) => <MasterLayout children={page} />;


export default Welcome;
