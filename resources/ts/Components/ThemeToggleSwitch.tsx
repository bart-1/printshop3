import { useEffect, useState } from "react";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ThemeToggleSwitch = () => {
    const [colorTheme, setColorTheme] = useState(false);

    useEffect(() => {
        colorTheme
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
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
