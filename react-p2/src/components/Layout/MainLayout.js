import React from "react";
import Sort from "../Sort/Sort";
import { Header } from "../Header/Header";
import Films from "../Films/Films";

const MainLayout = () => {
    return (
        <>
        <Header />
        <Sort/>
        <Films/>
        </>
    )
};

export default MainLayout;
