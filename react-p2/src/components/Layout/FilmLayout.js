import * as React from "react";
import Sort from "../Sort";
import Films from "../Films";
import Footer from "../Footer";
import ErrorHandler from "../ErrorHandler";
import MainFilm from "../MainFilm";
import {URL} from "../../constants/API";

class FilmLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id || '';
        this.fetchData(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData(this.props.match.params.id);
        }
    }

    fetchData = (id) => {
        fetch(URL + '/movies/' + id)
            .then(data => data.json())
            .then(film => this.setState({film}))
    };

    render() {
        const {film} = this.state;
        return (
            <>
                <MainFilm film={film}/>
                <Sort/>
                <Films/>
                <Footer/>
                <ErrorHandler/>
            </>
        )
    }

}

export default FilmLayout;
