import * as actions from '../constants/actionTypes';

export const setFilterByGender = filter => ({
    type: actions.SET_FILTER_BY_GENDER,
    filter
})

export const setFilterByAge = filter => ({
    type: actions.SET_FILTER_BY_AGE,
    filter
})

export const setSearchBarValue = value => ({
    type: actions.SET_SEARCH_BAR_VALUE,
    value
})
