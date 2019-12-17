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
        const {value, searchBy} = this.props.search;
        console.log(this.props);
        const query = (value.trim() !== '') ? `?search=${value}&searchBy=${searchBy}` : '';
        this.fetchData(query);
    }

    componentDidUpdate(prevProps, prevState) {
        const newSortType = this.props.sort.sortType;
        const oldSortType = prevProps.sort.sortType;
        const {value: newValue, searchBy: newSearchBy} = this.props.search;
        const {value: oldValue, searchBy: oldSearchBy} = prevProps.search;
        if (oldSortType !== newSortType) {
            this.setState({ films: this.state.films.sort((a, b) => a[newSortType] < b[newSortType] ? 1 : -1) })
        }
        if (newValue !== oldValue || newSearchBy !== oldSearchBy ) {
            this.fetchData(`?search=${newValue}&searchBy=${newSearchBy}`);
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
