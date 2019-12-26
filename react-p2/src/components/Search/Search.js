import React from 'react';
import {connect} from "react-redux";
import {changeSearchValue, changeSearchBy, setSearch} from "../../actions/actionCreator";
import Button from "../Button";
import {Link} from "react-router-dom";

import('./Search.scss');

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            searchBy: 'title'
        }
    }

    handleButtonClick = (searchBy) => {
        this.props.changeSearchBy(searchBy);
        this.setState({searchBy})
    };

    handleInputChange = ({target}) => {
        this.setState({
            value: target.value
        })
    };

    handleSubmitClick = () => {
        this.props.setSearch(this.state.value, this.state.searchBy);
    };

    render() {
        const {searchBy, value} = this.props.search;
        const isActive = (searchBy === 'title') ? true : false;
        const componentPath = this.getComponentPath(this.state);
        return (
            <div className="search">
                <div className="search--title">
                    <h2>find your movie</h2>
                </div>

                <div className="search--text">
                    <input type="text" name="search" placeholder="Search" defaultValue={value}
                           onChange={this.handleInputChange}/>
                    <Link to={componentPath}>
                        <Button type="main" isActive={true} text="Search" handleClick={this.handleSubmitClick}/>
                    </Link>
                </div>
                <div className="search--type">
                    <span>search by</span>
                    <Button type="left" isActive={isActive} text="title" returnType={'title'}
                            handleClick={this.handleButtonClick}/>
                    <Button type="right" isActive={!isActive} text="genre" returnType={'genres'}
                            handleClick={this.handleButtonClick}/>
                </div>
            </div>
        )
    }

    getSearchUrl({searchBy, value}) {
        return `?search=${value}&searchBy=${searchBy}`;
    }

    getComponentPath({searchBy, value}) {
        return `/${searchBy}/${value}`;
    }

}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps, {changeSearchValue, changeSearchBy, setSearch})(Search);
