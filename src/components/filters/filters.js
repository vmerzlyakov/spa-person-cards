import React from 'react';

import FilterByAge from './filters-by-age';
import FilterByGender from './filters-by-gender';

function Filters() {
    return <div className="filters-wrapper">
        <FilterByGender />
        <FilterByAge />
    </div>;
}

export default Filters;

