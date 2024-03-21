import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "../Components/ApplicationLogo";
import Dropdown from "../Components/Dropdown";
import ContentBoxSection from "../Components/ContentBoxSection";
import {
    BsCreditCard2Front,
    BsFileEarmarkImage,
    BsList,
    BsLayoutWtf,
    BsStickies,
} from "react-icons/bs";

interface WelcomeProps {
    auth: { user: { name: string; email: string } };
    laravelVersion: string;
    phpVersion: string;
}

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: WelcomeProps) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <>
                            <div className=" sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-xl leading-4 font-medium rounded-md  text-gray-600
                                                    hover:text-gray-900
                                                    dark:text-gray-400
                                                    dark:hover:text-white
                                                    focus:outline
                                                    focus:outline-2
                                                    focus:rounded-sm
                                                    focus:outline-red-500 focus:outline-none transition ease-in-out duration-150 uppercase
                                                    "
                                                >
                                                    {auth.user.name}{`...`}
                                                   <BsList/>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("welcome.logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-xl font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>
{/*
                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link> */}
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <ApplicationLogo
                            viewBox="0 0 300 300"
                            className="h-22"
                            fill="#FF2D20"
                        />
                    </div>

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
                                icon={
                                  <BsCreditCard2Front />
                                }
                                title="Wizytówki"
                            >
                                Maksymalny rozmiar 95x60 mm.
                            </ContentBoxSection>
                            <ContentBoxSection
                                icon={
                                   <BsLayoutWtf/>
                                }
                                title="Druk lateksowy - naklejki"
                            >
                                {" "}
                                Wszystkie naklejki nacinane ploterowo, w
                                arkuszach zbiorczych lub cięte na sztuki.
                            </ContentBoxSection>
                            <ContentBoxSection
                                icon={
                                    <BsFileEarmarkImage/>
                                }
                                title="Druk wielkoformatowy"
                            >
                                Plakaty, naklejki wielkoformatowe.
                            </ContentBoxSection>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm sm:text-start">
                            &nbsp;
                        </div>

                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
                            Wersja: {laravelVersion} (PHP v{phpVersion})
                        </div>
                    </div>
                </div>
            </div>

            {/* <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style> */}
        </>
    );
}
