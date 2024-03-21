import React, { ReactNode } from "react";
import { IconContext } from "react-icons";

interface BoxModuleProps {
    link?: string;
    title?: string;
    children: string | ReactNode | ReactNode[];
    icon?: ReactNode;
}

const ContentBoxSection = ({ icon, children, link, title }: BoxModuleProps) => {
    return (
        <>
            <a
                href={link ? route(link) : ""}
                className="scale-100 p-6 bg-white dark:bg-mygray-darker/50 dark:bg-gradient-to-bl from-mygray-lighter/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-black/60 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 border-[1px] border-mygray-normal hover:border-red-500"
            >
                <div>
                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                        <IconContext.Provider
                            value={{ className: "w-7 h-7 text-red-500" }}
                        >
                            {icon}
                        </IconContext.Provider>
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {title ? title : ""}
                    </h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-md leading-relaxed">
                        {children}
                    </p>
                </div>
                {link ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                ) : (
                    ""
                )}
            </a>
        </>
    );
};
export default ContentBoxSection;
