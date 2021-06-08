import React from 'react';

import Row from '../row';
import {
    AGE,
    GENDER,
    ADDRESS,
    REGISTRATION_DATE,
    translateGender
} from '../../constants/card'


function Card({
    dob,
    gender,
    location,
    name,
    picture,
    registered
}) {
    const infos = {
        [AGE]: dob.age,
        [GENDER]: translateGender(gender),
        [ADDRESS]: `${location.country},${location.city}`,
        [REGISTRATION_DATE]: new Date(registered.date).toLocaleDateString()
    };

    return (
        <div className="card-wrapper">
            <div className="card">
                <img
                    className="picture"
                    src={ picture.large }
                />
                <div className="person-data">
                    <label> { name.first } </label>
                    { Object.entries(infos).map(([ name, value ]) =>
                        <Row
                            cellName={ name }
                            cellValue={ value }
                            key={ name }
                            withShadow={ name === GENDER }
                        />
                    ) }
                </div>
            </div>
        </div>);
}

export default Card;