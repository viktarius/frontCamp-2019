import React from 'react';
import {connect} from "react-redux";
import {showError} from '../../actions/actionCreator';

import './ErrorHandler.scss';

class ErrorHandler extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.isActive && this.props.error.errorText.trim() !== '') {
            this.setState({isActive: true});
            this.errorTimer();
        }
    }

    errorTimer = () => {
        setTimeout(() => {
            this.props.showError('');
            this.setState({isActive: false})
        }, 10000)
    };

    render() {
        const {errorText} = this.props.error;
        const {isActive} = this.state;
        return (
            <div className={(isActive ? 'active-error' : '') + " error"}>{errorText}</div>
        )
    }
}

export default connect(state => ({
    error: state.error
}), {showError})(ErrorHandler);
