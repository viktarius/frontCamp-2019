import React from 'react';
import Logo from "../Logo";
import Search from "../Search";

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <Logo />
            <Search />
        </header>
    )
};
