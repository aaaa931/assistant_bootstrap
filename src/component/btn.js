import { useState } from "react";
import { Label } from "./theme";

const themeFn = (element, style1, style2) => {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add(style1);
        element[i].classList.remove(style2);
    }
};

const web_style = () => {
    const themeBg = document.querySelectorAll(".theme-bg");
    const styleSwitch = document.getElementById("style_switch");

    if (localStorage.getItem("webStyle") == "dark") {
        themeFn(themeBg, "theme-bg-dark", "theme-bg-light");
        styleSwitch.checked = true;
    }
};

const BtnSwitch = (props) => {
    // const [darkMode, setDarkMode] = useState(localStorage.getItem("webStyle"));

    const handleChange = () => {
        const themeBg = document.querySelectorAll(".theme-bg");

        if (localStorage.getItem("webStyle") == "dark") {
            themeFn(themeBg, "theme-bg-light", "theme-bg-dark");
            // localStorage.setItem("webStyle", "light");
            props.styleChange("light");
        } else {
            themeFn(themeBg, "theme-bg-dark", "theme-bg-light");
            // localStorage.setItem("webStyle", "dark");
            props.styleChange("dark");
        }

        /* 
        if (localStorage.getItem("webStyle") == "dark") {
            themeFn(themeBg, "theme-bg-light", "theme-bg-dark");
            themeFn(themeSection, "theme-section-light", "theme-section-dark");
            themeFn(themeText, "theme-text-light", "theme-text-dark");
            themeFn(themeBorder, "theme-border-light", "theme-border-dark");
            themeFn(themePlus, "theme-plus-light", "theme-plus-dark");
            themeFn(themeWarning, "theme-warning-light", "theme-warning-dark");
            themeFn(themeSuccess, "theme-success-light", "theme-success-dark");
            themeFn(themeDanger, "theme-danger-light", "theme-danger-dark");

            localStorage.setItem("webStyle", "light");
        } else {
            themeFn(themeBg, "theme-bg-dark", "theme-bg-light");
            themeFn(themeSection, "theme-section-dark", "theme-section-light");
            themeFn(themeText, "theme-text-dark", "theme-text-light");
            themeFn(themeBorder, "theme-border-dark", "theme-border-light");
            themeFn(themePlus, "theme-plus-dark", "theme-plus-light");
            themeFn(themeWarning, "theme-warning-dark", "theme-warning-light");
            themeFn(themeSuccess, "theme-success-dark", "theme-success-light");
            themeFn(themeDanger, "theme-danger-dark", "theme-danger-light");

            localStorage.setItem("webStyle", "dark");
        }
        */
    };

    return (
        <form>
            <Label htmlFor="style_switch" className="me-3">
                深色模式
                <input
                    type="checkbox"
                    name="style_switch"
                    id="style_switch"
                    onChange={handleChange}
                />
                <span className="switch ms-3 align-middle">
                    <span className="switch-btn"></span>
                </span>
            </Label>
        </form>
    );
};

export default BtnSwitch;
export { web_style };
