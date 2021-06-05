import * as actions from '../constants/actionTypes';

export function savePersons(persons) {
    return { 
        type: actions.SAVE_PERSONS,
        persons
    };
}

export function filterPersonByGender(filter) {
    return { 
        type: actions.FILTER_PERSONS_BY_GENDER,
        filter
    };
}