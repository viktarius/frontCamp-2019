import React from 'react';
import Logo from '../Logo';

import './MainFilm.scss';

const MainFilm = ({film: {title, vote_average, poster_path, release_date, overview, runtime}}) => {
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
    )
};

 export default MainFilm;
