import * as actions from '../constants/actionTypes';

export const savePersons = persons => ({
    type: actions.SAVE_PERSONS,
    persons
});

export const filterPersons = () => (dispatch, getState) => {
    const filterSet = getState().filtersReducer;
    dispatch({
        type: actions.FILTER_PERSONS,
        filters: filterSet
    });
};