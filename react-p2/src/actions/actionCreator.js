import {CHANGE_SEARCH_URL, CHANGE_SORT_TYPE, ERROR} from "../constants/REDUX";

export const changeSort = (sortType) => ({
    type: CHANGE_SORT_TYPE,
    sortType
});

export const changeSearchURL = (searchURL) => ({
    type: CHANGE_SEARCH_URL,
    searchURL
});

export const showError = (errorText) => ({
    type: ERROR,
    errorText
});
