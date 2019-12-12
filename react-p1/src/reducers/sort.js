import {CHANGE_SORT_TYPE} from "../constants/REDUX";

const initialState = {
    sortType: 'release_date',
    types: [
        'release_date',
        'vote_average'
    ]
};

const sort = (state = initialState, {type, sortType}) => {
    switch (type) {
        case CHANGE_SORT_TYPE:
            return {
                ...state,
                sortType
            };
        default:
            return  state;
    }
};

export default sort;
