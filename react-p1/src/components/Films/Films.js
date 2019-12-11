import React, {Component} from 'react';
import {FilmPoster} from "../FilmPoster/FilmPoster";

import './Films.scss';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoad: false
        }
    }

    componentDidMount() {
        fetch('https://reactjs-cdp.herokuapp.com/movies')
            .then(data => data.json())
            .then(data =>
                this.setState({films: data.data})
            )
            .catch(e => console.error('fetch error: ', e.message))
            .finally(() => this.setState({isLoad: true}));
    }

    render() {
        const {films} = this.state;
        console.log(films);
        return (
            <div className="films">
                {films.map(film => <FilmPoster key={film.id} film={film}/>)}
            </div>
        )
    }
}

export default Films;
