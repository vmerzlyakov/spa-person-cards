import * as actions from '../constants/actionTypes';
import { filterCodes } from '../constants/filter';

const initialState = {
    persons: [],
    filteredPersons: []
};

const filterPersonByGender = (persons, filter) =>
    persons.filter(p => filter === filterCodes.ALL || p.gender === filter);

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actions.SAVE_PERSONS:
            return {
                filteredPersons: filterPersonByGender(action.persons, filterCodes.ALL),
                persons: action.persons
            };

        case actions.FILTER_PERSONS_BY_GENDER:
            return {
                ...state,
                filteredPersons: filterPersonByGender(state.persons, action.filter)
            };
                
        default:
            return state;
    }
}