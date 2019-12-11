import React from 'react';
import {Logo} from "../Logo/Logo";

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
        fetch('https://reactjs-cdp.herokuapp.com/movies/' + id)
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

    // id: 320288
    // title: "X-Men: Dark Phoenix"
    // tagline: ""
    // vote_average: 0
    // vote_count: 0
    // release_date: "2019-02-14"
    // poster_path: "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg"
    // overview: "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!"
    // budget: 0
    // revenue: 0
    // genres: (2) ["Action", "Science Fiction"]
    // runtime: null

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
                                {release_date && release_date.split('-')[0]}  <span>year</span>
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
