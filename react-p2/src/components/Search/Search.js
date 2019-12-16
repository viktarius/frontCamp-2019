import React from 'react';
import { connect } from "react-redux";
import { changeSearchURL } from "../../actions/actionCreator";
import Button from "../Button";
import { Link } from "react-router-dom";

import('./Search.scss');

class Search extends React.Component {
    constructor({ searchBy, value }) {
        super();
        this.state = {
            value: value,
            searchBy: searchBy
        }
    }

    handleButtonClick = (searchBy) => {
        this.setState({ searchBy })
    };

    handleInputChange = ({ target }) => {
        this.setState({
            value: target.value
        })
    };

    componentDidMount() {
        this.props.changeSearchURL(this.getSearchUrl(this.props))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.getSearchUrl(prevProps) !== this.getSearchUrl(this.props)) {
            this.setState({value: this.props.value});
            this.props.changeSearchURL(this.getSearchUrl(this.props))
        }
    }

    render() {
        console.log(this.props);
        const { searchBy, value } = this.state;
        const isActive = (searchBy === 'title') ? true : false;
        const componentPath = this.getComponentPath(this.state);
        return (
            <div className="search">
                <div className="search--title">
                    <h2>find your movie</h2>
                </div>

                <div className="search--text">
                    <input type="text" name="search" placeholder="Search" value={value}
                           onChange={this.handleInputChange}/>
                    <Link to={componentPath}>
                        <Button type="main" isActive={true} text="Search"/>
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

    getSearchUrl({ searchBy, value }) {
        return `?search=${value}&searchBy=${searchBy}`;
    }

    getComponentPath({ searchBy, value }) {
        return `/${searchBy}/${value}`;
    }

}

// export default Search;

export default connect(state => ({
    search: state.search
}), { changeSearchURL })(Search);

