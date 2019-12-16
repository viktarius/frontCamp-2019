import {CHANGE_SEARCH_URL} from "../constants/REDUX";

const initialState = {
    searchURL: ''
};

const search = (state = initialState, {type, searchURL}) => {
    switch (type) {
        case CHANGE_SEARCH_URL:
            return {
                searchURL
            };
        default:
            return  state;
    }
};

export default search;
