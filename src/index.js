import React, { useEffect, useMemo, useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/nav";
import { web_style } from "./component/btn";
import Note from "./note";
import { ThemeProvider } from "@emotion/react";
import theme from "./component/theme";
import Item from "./item";
import init, {
    noteData,
    itemData,
    itemCol,
    accountingCol,
    accountingData,
} from "./init";
import Accounting from "./accounting";
import Dashboard from "./dashboard";
import Record from "./record";
init();

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route path="" element={<Dashboard />} />
                <Route path="note" element={<Note data={noteData} />} />
                <Route
                    path="item"
                    element={<Item data={itemData} col={itemCol} />}
                />
                <Route
                    path="accounting"
                    element={
                        <Accounting data={accountingData} col={accountingCol} />
                    }
                />
                <Route path="record" element={<Record />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

web_style();
