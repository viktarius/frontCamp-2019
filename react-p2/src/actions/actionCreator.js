import { CHANGE_SEARCH_VALUE, CHANGE_SEARCH_BY, CHANGE_SORT_TYPE, ERROR, SET_SEARCH } from "../constants/REDUX";

export const changeSort = (sortType) => ({
    type: CHANGE_SORT_TYPE,
    sortType
});

export const changeSearchValue = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    value
});

export const setSearch = (value, searchBy) => ({
    type: SET_SEARCH,
    value,
    searchBy
});

export const changeSearchBy = (searchBy) => ({
    type: CHANGE_SEARCH_BY,
    searchBy
});

export const showError = (errorText) => ({
    type: ERROR,
    errorText
});
