import React, {Component} from 'react';
import {FilmPoster} from "../FilmPoster/FilmPoster";

import './Films.scss';
import {connect} from "react-redux";
import sort from "../../reducers/sort";

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoad: false
        }
    }

    fetchData = (query='') => {
        const {sortType} = this.props.sort;
        fetch('https://reactjs-cdp.herokuapp.com/movies' + query)
            .then(data => data.json())
            .then(({data}) =>
                this.setState({films: data.sort((a, b) => a[sortType] < b[sortType] ? 1 : -1)})
            )
            .catch(e => console.error('fetch error: ', e.message))
            .finally(() => this.setState({isLoad: true}));
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        const oldSortType = prevProps.sort.sortType;
        const newSortType = this.props.sort.sortType;
        const oldSearchValue = prevProps.search.value;
        const newSearchValue = this.props.search.value;
        const searchBy = this.props.search.searchBy;
        console.log(oldSearchValue, newSearchValue);
        if (oldSortType !== newSortType) {
            this.setState({films: this.state.films.sort((a, b) => a[newSortType] < b[newSortType] ? 1 : -1)})
        }
        if(oldSearchValue !== newSearchValue){
            this.fetchData(`?search=${newSearchValue}&searchBy=${searchBy}`);
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
}))(Films);
