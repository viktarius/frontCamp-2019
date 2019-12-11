import React from 'react';

import './Header.scss';
import Search from "../Search/Search";
import {Logo} from "../Logo/Logo";

export const Header = () => {
    return (
        <header>
            <Logo />
            <Search />
        </header>
    )
};
