import React from 'react';
import {Logo} from "../Logo/Logo";

class MainFilm extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        const id = this.props.match.params.id || '';
        console.log(id);
    }

    render() {
        return (
            <div>
                <Logo />
                blabla
            </div>
        );
    }
}

export default MainFilm;
