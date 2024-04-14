import { useEffect, useState } from "react";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from "react-icons/bs";
import { IconContext } from "react-icons";


const localStorageTheme = localStorage.getItem("theme");
const isDark = localStorageTheme === "dark" ? true : false;



const ThemeToggleSwitch = () => {
    const [colorTheme, setColorTheme] = useState(isDark);

    useEffect(() => {
        if (colorTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }
    }, [colorTheme]);

    return (
        <div className="fixed top-3">
            <button
                className="p-3 z-12"
                onClick={() => setColorTheme((prevState) => !prevState)}
            >
                <IconContext.Provider
                    value={{
                        size: "25px",
                        className:
                            "fill-indigo-950 dark:fill-white dark:text-white text-indigo-950",
                    }}
                >
                    {!colorTheme ? (
                        <div className="h-8 flex gap-2">
                            <BsSunFill />
                            <CgToggleOn />
                            <BsMoon />
                        </div>
                    ) : (
                        <div className="h-8 flex gap-2">
                            <BsSun />
                            <CgToggleOff />
                            <BsMoonFill />
                        </div>
                    )}
                </IconContext.Provider>
            </button>
        </div>
    );
};

export default ThemeToggleSwitch;
