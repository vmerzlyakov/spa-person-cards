import * as actions from '../constants/actionTypes';
import { filterCodes } from '../constants/filter';

const initialState = {
    filterByGender: filterCodes.ALL,
    filtersByAge: {},
    searchBar: ''
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_FILTER_BY_GENDER:
            return {
                ...state,
                filterByGender: action.filter
            };
        
        case actions.SET_FILTER_BY_AGE:
            const { filter } = action;
            const newFilters = {
                ...state.filtersByAge,
            };
            newFilters[filter] = !state.filtersByAge[filter];
            return {
                ...state,
                filtersByAge: newFilters                
            };

        case actions.SET_SEARCH_BAR_VALUE:
            return {
                ...state,
                searchBar: action.value
            };
                
        default:
            return state;
    }
}