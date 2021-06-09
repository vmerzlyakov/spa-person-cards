import FilterByAge from '../components/filters/filters-by-age';
import FilterByGender from '../components/filters/filters-by-gender';
import * as actions from '../constants/actionTypes';
import { filterCodes, filtersSetByAge } from '../constants/filter';

const initialState = {
    persons: [],
    filteredPersons: []
};

const filterPersons = (persons, filters) => {
    const {
        filtersByAge,
        filterByGender,
        searchBar
    } = filters;

    const isFilterByAgeSet = filtersByAge &&
        Object.values(filtersByAge).some(v => !!v);

    let filteredPersons = isFilterByAgeSet ? [] : persons.slice();

    if (isFilterByAgeSet) {
        filtersSetByAge.forEach(({ from, to, code }) => {
            if (filtersByAge[code]) {
                const part = persons.filter(p => (
                    p.dob.age >= from && p.dob.age < (to || Infinity)
                ));
                filteredPersons = filteredPersons.concat(part);
            }
        });
    }

    if (filterByGender) {
        filteredPersons = filteredPersons.filter(p =>
            filterByGender === filterCodes.ALL || p.gender === filterByGender
        );
    }

    if (searchBar && searchBar.length > 3) {
        const str = searchBar.toLowerCase();
        filteredPersons = filteredPersons.filter(p => {
            const { first, last } = p.name;
            const { city, country } = p.location;

            return (
                ~first.toLowerCase().indexOf(str) ||
                ~last.toLowerCase().indexOf(str) ||
                ~city.toLowerCase().indexOf(str) ||
                ~country.toLowerCase().indexOf(str)
            );
        });
    }

    return filteredPersons;
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actions.SAVE_PERSONS:
            const { persons } = action;
            const filters = {
                filterByGender: filterCodes.ALL
            };
            return {
                filteredPersons: filterPersons(persons, filters),
                persons
            };

        case actions.FILTER_PERSONS:
            return {
                ...state,
                filteredPersons: filterPersons(state.persons, action.filters)
            };
                
        default:
            return state;
    }
}