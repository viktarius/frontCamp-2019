import React, {Component} from 'react';
import {FilmPoster} from "../FilmPoster/FilmPoster";

import './Films.scss';
import {connect} from "react-redux";
import {showError} from "../../actions/actionCreator";

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoad: false
        }
    }

    fetchData = (query = '') => {
        const {sortType} = this.props.sort;
        fetch('https://reactjs-cdp.herokuapp.com/movies' + query)
            .then(data => data.json())
            .then(({data}) =>
                this.setState({films: data.sort((a, b) => a[sortType] < b[sortType] ? 1 : -1)})
            )
            .catch(e => this.props.showError('fetch error: ', e.message))
            .finally(() => this.setState({isLoad: true}));
        this.props.showError('fetch error: ');
    };

    componentDidMount() {
        const searchValue = this.props.search.value;
        const searchBy = this.props.search.searchBy;
        const query = (searchValue.trim() !== '') ? `search=${searchValue}&searchBy=${searchBy}` : '';
        this.fetchData(query);
    }

    componentDidUpdate(prevProps, prevState) {
        const oldSortType = prevProps.sort.sortType;
        const oldSearchValue = prevProps.search.value;
        const oldSearchBy = prevProps.search.searchBy;
        const newSortType = this.props.sort.sortType;
        const newSearchValue = this.props.search.value;
        const newSearchBy = this.props.search.searchBy;
        if (oldSortType !== newSortType) {
            this.setState({films: this.state.films.sort((a, b) => a[newSortType] < b[newSortType] ? 1 : -1)})
        }
        if (oldSearchValue !== newSearchValue || oldSearchBy !== newSearchBy) {
            this.fetchData(`?search=${newSearchValue}&searchBy=${newSearchBy}`);
        }
    }

    render() {
        const {films, isLoad} = this.state;
        return (
            <div className="films">
                {films.map(film => <FilmPoster key={film.id} film={film}/>)}
            </div>
        )
    }
}

export default connect(state => ({
    sort: state.sort,
    search: state.search
}), {showError})(Films);
