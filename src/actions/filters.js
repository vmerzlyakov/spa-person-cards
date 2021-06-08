import * as actions from '../constants/actionTypes';

export function setFilterByGender(filter) {
    return { 
        type: actions.SET_FILTER_BY_GENDER,
        filter
    };
}

export function setFilterByAge(filter) {
    return { 
        type: actions.SET_FILTER_BY_AGE,
        filter
    };
}
