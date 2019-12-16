import React, { Component } from 'react';
import { connect } from "react-redux";
import { showError } from "../../actions/actionCreator";
import FilmPoster from "../FilmPoster";
import { URL } from '../../constants/API';

import './Films.scss';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoad: false
        }
    }

    fetchData = (query = '') => {
        const { sortType } = this.props.sort;
        fetch(URL + '/movies' + query)
            .then(data => data.json())
            .then(({ data }) =>
                this.setState({ films: data.sort((a, b) => a[sortType] < b[sortType] ? 1 : -1) })
            )
            .catch(e => this.props.showError('fetch error: ', e.message))
            .finally(() => this.setState({ isLoad: true }));
    };

    componentDidMount() {
        const searchURL = this.props.search.searchURL;
        const query = (searchURL.trim() !== '') ? `${searchURL}` : '';
        this.fetchData(query);
    }

    componentDidUpdate(prevProps, prevState) {
        const newSortType = this.props.sort.sortType;
        const oldSortType = prevProps.sort.sortType;
        const newSearchURL = this.props.search.searchURL;
        const oldSearchURL = prevProps.search.searchURL;
        if (oldSortType !== newSortType) {
            this.setState({ films: this.state.films.sort((a, b) => a[newSortType] < b[newSortType] ? 1 : -1) })
        }
        if (newSearchURL !== oldSearchURL) {
            this.fetchData(`${newSearchURL}`);
        }

    }

    render() {
        const { films, isLoad } = this.state;
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
}), { showError })(Films);
