import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";


import React, { ReactNode } from 'react';
import ThemeToggleSwitch from "./Components/ThemeToggleSwitch";

interface ThemeProps {
    children: ReactNode | ReactNode[];
}

const Theme = ({ children }: ThemeProps) => {

        return (
            <>
                <ThemeToggleSwitch />
                {children}
            </>
        )
};
export default Theme;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<Theme>
            <App {...props} />
        </Theme>);
    },
    progress: {
        color: "#4B5563",
    },
});
