import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Filters from '../filters'
import Persons from '../persons'
import { url } from '../../constants/app'
import { savePersons } from '../../actions/persons';

function App({
    savePersons,
    filteredPersons
}) {
    useEffect(() => {
        const fetchPersons = async () => {
            const res = await axios(url);
            savePersons(res.data.results);
            localStorage.setItem('persons', JSON.stringify(res.data.results));
        };

        const savedPersons = localStorage.getItem('persons');

        if (savedPersons) {
            try {
                const res = JSON.parse(savedPersons);
                savePersons(res);
            } catch {
                localStorage.removeItem('persons');
                fetchPersons();
            }
        } else {
            fetchPersons();
        }
    }, []);

    return (
        <div className="app">
            <Filters />
            <Persons persons={ filteredPersons } />
        </div>
    );
}

const mapDispatchToProps = {
    savePersons
}

const mapStateToProps = state => ({
    filteredPersons: state.personsReducer.filteredPersons
})

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;