import * as actions from '../constants/actionTypes';
import { filterCodes } from '../constants/filterTypes';

const initialState = {
    filterByGender: filterCodes.ALL
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_FILTER_BY_GENDER:
            return { filterByGender: action.filter };
                
        default:
            return state;
    }
}