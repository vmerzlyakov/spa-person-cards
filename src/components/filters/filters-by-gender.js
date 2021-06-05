import React from 'react';
import { connect } from 'react-redux';

import { filterCodes, filtersByGender } from '../../constants/filterTypes';
import { setFilterByGender } from '../../actions/filters';
import { filterPersonByGender } from '../../actions/persons';

function FilterByGender({
    checkedFilter,
    filterPersonByGender,
    setFilterByGender
}) {
    const handleOnClickCheckBox = filter => {
        setFilterByGender(filter);
        filterPersonByGender(filter);
    }

    return <div className="filter by-gender">
        { filtersByGender.map(filter => (
            <label key={filter.code}>
                <input 
                    type="radio"
                    name="sex"
                    checked={ filter.code === checkedFilter }
                    onChange={ () => handleOnClickCheckBox(filter.code) }
                />
                { filter.name }
            </label>)
        ) }
    </div>;
}

const mapStateToProps = state => ({
    checkedFilter: state.filtersReducer.filterByGender
})

const mapDispatchToProps = {
    setFilterByGender,
    filterPersonByGender
}

const filterByGenderContainer = connect(mapStateToProps, mapDispatchToProps)(FilterByGender);

export default filterByGenderContainer;