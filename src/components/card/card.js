import React from 'react';

function Card({
    dob,
    gender,
    location,
    name,
    picture,
    registred
}) {

    return (
        <div className="card-wrapper">
            <div className="card">
                <img
                    className="picture"
                    src={ picture.large }
                />
                <div className="person-data">
                    <label> { name.first } </label>
                </div>
            </div>
        </div>);
}

export default Card;