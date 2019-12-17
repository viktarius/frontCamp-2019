import React from "react";
import Sort from "../Sort/Sort";
import { Header } from "../Header/Header";
import Films from "../Films/Films";
import Footer from "../Footer";
import ErrorHandler from "../ErrorHandler";
import { connect } from "react-redux";
import { setSearch } from "../../actions/actionCreator";

class MainLayout extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {value, type: searchBy  } = this.props.match.params;
        this.props.setSearch(value, searchBy);
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

export default connect(mapStateToProps, { setSearch })(MainLayout);
