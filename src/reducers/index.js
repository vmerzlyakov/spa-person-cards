import { combineReducers } from 'redux';
import personsReducer from './personsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    personsReducer,
    filtersReducer
});