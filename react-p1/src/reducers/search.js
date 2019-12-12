import {CHANGE_SEARCH_VALUE, CHANGE_SEARCH_BY} from "../constants/REDUX";

const initialState = {
    value: '',
    searchBy: 'title'
};

const search = (state = initialState, {type, value, searchBy}) => {
    switch (type) {
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                value
            };
        case CHANGE_SEARCH_BY:
            return {
                ...state,
                searchBy
            };
        default:
            return  state;
    }
};

export default search;
