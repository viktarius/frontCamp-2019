import {ERROR} from "../constants/REDUX";

const initialState = {
    errorText: ''
};

const error = (state = initialState, {type, errorText}) => {
    switch (type) {
        case ERROR:
            return {
                errorText
            };
        default:
            return state;
    }
};

export default error;
