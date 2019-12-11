import React from 'react';
import {Button} from "../Button/Button";
import {connect} from "react-redux";
import {changeSort} from '../../actions/actionCreator';

import './Sort.scss';

const Sort = ({sort: {types, sortType}, changeSort}) => {
    const handleButtonClick = (sortType) => {
        changeSort(sortType)
    };

    const isActive = (sortType === types[0]) ? true : false;

    return (
        <div className="sort">
            <span>sort by</span>
            <Button type="left" isActive={isActive} text="release date" returnType={types[0]}
                    handleClick={handleButtonClick}/>
            <Button type="right" isActive={!isActive} text="rating" returnType={types[1]}
                    handleClick={handleButtonClick}/>
        </div>
    )
};

export default connect(state => ({
    sort: state.sort
}), {changeSort})(Sort);
