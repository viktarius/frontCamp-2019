import React from "react";
import {Link} from "react-router-dom";

import './Logo.scss';

export const Logo = () => {
    return (
        <div className="logo"><Link to="/" className="logo--link"><strong>netflix</strong>routllete</Link></div>
    )
};
