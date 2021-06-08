import React, { useEffect } from 'react';

import Card from '../card';

function Persons({ persons }) {
    return (
        <div className="persons">
            { persons.map( p => (
                <Card 
                    dob={ p.dob }
                    gender={ p.gender }
                    location={ p.location }
                    name={ p.name }
                    picture={ p.picture }
                    registered={ p.registered }
                    key={ `${p.id.value}${p.registered.date}` }
                />
            )) }
        </div>);
}

export default Persons;
