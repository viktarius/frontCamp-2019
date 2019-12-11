import React from 'react';

import './Header.scss';
import Search from "../Search/Search";

export const Header = () => {
    return (
        <header>
            <div className="logo"><strong>netflix</strong>routllete</div>
            <Search />
        </header>
    )
};
