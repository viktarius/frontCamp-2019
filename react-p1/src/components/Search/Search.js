import React from 'react';
import {Button} from "../Button/Button";

import('./Search.scss');

const handleButtonClick = () => {
    console.log('click')
};

export const Search = () => {
    return (
        <div className="search">
            <div className="search--title">
                <h2>find your movie</h2>
            </div>

            <div className="search--text">
                <input type="text" name="search" placeholder="Search"/>
                <Button type="main" isActive={true} text="Search" handleClick={handleButtonClick}/>
            </div>
            <div className="search--type">
                <span>search by</span>
                <Button type="left" isActive={true} text="release date" handleClick={handleButtonClick}/>
                <Button type="right" isActive={false}  text="rating"  handleClick={handleButtonClick}/>
            </div>
        </div>
    )
};
