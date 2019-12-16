import React from 'react';
import {connect} from "react-redux";
import {changeSearchBy, changeSearchValue} from "../../actions/actionCreator";
import Button from "../Button";

import('./Search.scss');

class Search extends React.Component{

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleButtonClick = (searchBy) => {
        this.props.changeSearchBy(searchBy);
    };

    handleSearchClick = () => {
        this.props.changeSearchValue(this.state.value)
    };

    handleInputChange = ({target}) => {
        this.setState({
            value: target.value
        })
    };


    render() {
        const {search} = this.props;
        const isActive = (search.searchBy === 'title') ? true : false;
        return (
            <div className="search">
                <div className="search--title">
                    <h2>find your movie</h2>
                </div>

                <div className="search--text">
                    <input type="text" name="search" placeholder="Search" onChange={this.handleInputChange}/>
                    <Button type="main" isActive={true} text="Search" handleClick={this.handleSearchClick}/>
                </div>
                <div className="search--type">
                    <span>search by</span>
                    <Button type="left" isActive={isActive} text="title" returnType={'title'} handleClick={this.handleButtonClick}/>
                    <Button type="right" isActive={!isActive}  text="genre" returnType={'genres'} handleClick={this.handleButtonClick}/>
                </div>
            </div>
        )
    }


};

export default connect(state => ({
    search: state.search
}), {changeSearchValue, changeSearchBy})(Search);
