import React from 'react';
import Logo from "../Logo";
import {URL} from '../../constants/API';

import './MainFilm.scss';

class MainFilm extends React.Component {
    constructor() {
        super();
        this.state = {
            film: {},
            isLoad: false
        }
    }

    fetchData = (id) => {
        fetch(URL + '/movies/' + id)
            .then(data => data.json())
            .then(film => this.setState({film}))
            .finally(() => this.setState({isLoad: true}));
    };

    componentDidMount() {
        const id = this.props.match.params.id || '';
        this.fetchData(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData(this.props.match.params.id);
        }
    }

    render() {
        const {title, vote_average, poster_path, release_date, overview, runtime} = this.state.film;
        return (
            <div className='film-wrapper'>
                <Logo/>
                <div className="mainFilm">
                    <div className="mainFilm--img">
                        <img src={poster_path} alt=""/>
                    </div>
                    <div className="mainFilm--info">
                        <div className="film-info--head">
                            <div className="head--title">
                                {title}
                            </div>
                            <div className="head--vote">
                                {vote_average}
                            </div>
                        </div>
                        <div className="film-info--dur">
                            <div className="dur--year">
                                {release_date && release_date.split('-')[0]} <span>year</span>
                            </div>
                            <div className="dur--runtime">
                                {runtime || 0} <span>min</span>
                            </div>
                        </div>
                        <div className="film-info--content">{overview}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFilm;
