import React from 'react';
import Logo from "../Logo";
import Search from "../Search";

import './Header.scss';

export const Header = (props) => {
    const type = props.match.params.type || '';
    const value = props.match.params.value || '';
    return (
        <header>
            <Logo/>
            <Search value={value} searchBy={type}/>
        </header>
    )
};
