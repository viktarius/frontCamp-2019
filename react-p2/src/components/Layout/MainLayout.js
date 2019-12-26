import React from "react";
import Sort from "../Sort/Sort";
import {Header} from "../Header/Header";
import Films from "../Films/Films";
import Footer from "../Footer";
import ErrorHandler from "../ErrorHandler";
import {connect} from "react-redux";
import {setSearch} from "../../actions/actionCreator";

class MainLayout extends React.Component {
    constructor() {
        super();
    }

    replaceState() {
        const {value = '', type: searchBy = 'title'} = this.props.match.params;
        this.props.setSearch(value, searchBy);
    }

    componentDidMount() {
        this.replaceState();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {value: newValue} = this.props.match.params;
        const {value: oldValue} = prevProps.match.params;
        if (newValue !== oldValue) {
            this.replaceState();
        }
    }

    render() {
        return (
            <>
                <Header/>
                <Sort/>
                <Films/>
                <Footer/>
                <ErrorHandler/>
            </>
        )
    }

};

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {setSearch})(MainLayout);
