import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Filters from '../filters'
import Persons from '../persons'
import { url } from '../../constants/app'
import { savePersons } from '../../actions/persons';
import { filterPersons } from '../../actions/persons';

function App({
    savePersons,
    filterPersons,
    filteredPersons
}) {
    useEffect(() => {
        const fetchPersons = async () => {
            const res = await axios(url);
            savePersons(res.data.results);
        };

        fetchPersons();
    }, []);

    const handleOnChangeFilters = filters => filterPersons(filters);

    return (
        <div className="app">
            <Filters handleOnChangeFilters={ handleOnChangeFilters }/>
            <Persons persons={ filteredPersons } />
        </div>
    );
}

const mapDispatchToProps = {
    filterPersons,
    savePersons
}

const mapStateToProps = state => ({
    filteredPersons: state.personsReducer.filteredPersons
})

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;