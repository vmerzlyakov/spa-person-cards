import React from 'react';

import { filtersByGender } from '../../constants/filter';

function FilterByGender({ checkedFilter, handleOnChange }) {
    return (
        <div>
            <div className="filter-header">Фильтр по полу</div>
            <div className="filter by-gender">
                { filtersByGender.map(filter => (
                    <label className="radio" key={ filter.code }>
                        <input
                            className="input"
                            type="radio"
                            name="sex"
                            checked={ filter.code === checkedFilter }
                            onChange={ () => handleOnChange(filter.code) }
                        />
                        <div className="radio-marker"></div>
                        { filter.name }
                    </label>)
                ) }
            </div>
        </div>
    );
}


export default FilterByGender;