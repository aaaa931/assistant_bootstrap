import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BtnSwitch from "./btn";
import theme, { NavContainer, Text, TextUrl } from "./theme";

const NavBrand = () => (
    <section className="navbar-brand ms-lg-5 ms-3">
        <Link to={"/"} className="navbar-brand">
            <TextUrl>個人數位助理</TextUrl>
        </Link>
    </section>
);

const NavToggler = () => (
    <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
    >
        <Text className="bi bi-list"></Text>
        {/* navbar-toggler-icon */}
    </button>
);

const webList = {
    首頁: "",
    記事: "note",
    項目: "item",
    記帳: "accounting",
    紀錄: "record",
};

const NavList = (props) => {
    const lists = Object.entries(webList).map(([webName, webUrl]) => (
        <li className="nav-item" key={webName}>
            <Link to={webUrl} className="nav-link">
                <Text>{webName}</Text>
            </Link>
        </li>
    ));

    return (
        <section className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto me-lg-5">{lists}</ul>
            <BtnSwitch styleChange={props.styleChange} />
        </section>
    );
};

export default function Nav(props) {
    const [style, setStyle] = useState(localStorage.getItem("webStyle"));

    const styleChange = (style) => {
        setStyle(style);
        localStorage.setItem("webStyle", style);
    };

    return (
        <ThemeProvider theme={theme[style]}>
            <NavContainer className="navbar navbar-expand-lg">
                <section className="container-fluid">
                    <NavBrand></NavBrand>
                    <NavToggler></NavToggler>
                    <NavList styleChange={styleChange}></NavList>
                </section>
            </NavContainer>
            <Outlet />
        </ThemeProvider>
    );
}
