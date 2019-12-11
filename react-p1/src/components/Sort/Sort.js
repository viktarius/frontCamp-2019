import React from 'react';
import {Button} from "../Button/Button";

import './Sort.scss';

// here will redux
const handleButtonClick = () => console.log('tst');

export const Sort = () => {
    return (
        <div className="sort">
            <span>sort by</span>
            <Button type="left" isActive={true} text="release date" handleClick={handleButtonClick}/>
            <Button type="right" isActive={false}  text="rating"  handleClick={handleButtonClick}/>
        </div>
    )
};
