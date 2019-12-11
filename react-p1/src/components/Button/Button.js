import React from 'react';

import './Button.scss';

export const Button = ({type, isActive, text, handleClick}) => {
    const isA = isActive? ' active': '';
    return(
        <button className={type + isA} onClick={handleClick}>{text}</button>
    )
};
