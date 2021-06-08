import React from 'react';

import Row from '../row';

const genderMap = {
    male: 'Мужской',
    female: 'Женский'
};

const translateGender = value => genderMap[value];

function Card({
    dob,
    gender,
    location,
    name,
    picture,
    registered
}) {
    const infos = {
        'Возраст': dob.age,
        'Пол': translateGender(gender),
        'Адрес': `${location.country},${location.city}`,
        'Дата регистрации': new Date(registered.date).toLocaleDateString()
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
                        <Row cellName={ name } cellValue={ value } />
                    ) }
                </div>
            </div>
        </div>);
}

export default Card;