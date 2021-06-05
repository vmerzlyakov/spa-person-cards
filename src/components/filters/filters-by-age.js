import React from 'react';

import { filtersByAge } from '../../constants/filterTypes';

function FilterByAge() {
    return <div className="filter by-age">
        { filtersByAge.map(filter => {
            const name = `${filter.from}${
                !filter.to
                    ? '+'
                    : '-' + filter.to
            }`;

            return <label key={name}>
                <input 
                    type="checkbox"
                    name="sex"
                />
                { name }
            </label>
        }) }
    </div>;
}

export default FilterByAge;