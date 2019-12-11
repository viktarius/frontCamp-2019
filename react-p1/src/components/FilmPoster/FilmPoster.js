import React from 'react';

import './FilmPoster.scss';
import './FilmsPosterResponsive.scss';

export const FilmPoster = ({film: {title, genres, poster_path, release_date}}) => {
    const year = release_date.split('-')[0];
    const genresOutput = genres.length === 2? genres.join('&') : genres.join(', ');
    return (
        <div className="film">
            <div className="film--img">
                <img src={poster_path} alt=""/>
            </div>
            <div className="film--info">
                <div className="info--left">
                    <div className="title">
                        {title}
                    </div>
                    <div className="genres">
                        {genresOutput}
                    </div>
                </div>
                <div className="info--right">
                    <div className="year">
                        {year}
                    </div>
                </div>
            </div>
        </div>
    )
};
