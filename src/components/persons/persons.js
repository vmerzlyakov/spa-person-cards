import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Card from '../card';
import { savePersons } from '../../actions/persons';

const page = 1;
const numbers = 30;
const includes = 'dob,gender,id,location,name,picture,registered';

const url = `https://randomuser.me/api/?page=${page}&results=${numbers}&inc=${includes}`;

function Persons({ savePersons, filteredPersons }) {
    useEffect(() => {
        const fetchPersons = async () => {
            const res = await axios(url);
            savePersons(res.data.results);
        };

        fetchPersons();
    }, []);

    return (
        <div className="persons">
            { filteredPersons.map( p => (
                <Card 
                    dob={ p.dob }
                    gender={ p.gender }
                    location={ p.location }
                    name={ p.name }
                    picture={ p.picture }
                    registred={ p.registred }
                    key={ `${p.id.value}${p.registered.date}` }
                />
            )) }
        </div>);
}

const mapDispatchToProps = {
    savePersons
}

const mapStateToProps = state => ({
    filteredPersons: state.personsReducer.filteredPersons
})

const personsContainer = connect(mapStateToProps, mapDispatchToProps)(Persons);

export default personsContainer;
