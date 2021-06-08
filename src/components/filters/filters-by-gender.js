import React from 'react';
import { connect } from 'react-redux';

import { filtersByGender } from '../../constants/filter';
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
            <label className="radio" key={ filter.code }>
                <input
                    className="input"
                    type="radio"
                    name="sex"
                    checked={ filter.code === checkedFilter }
                    onChange={ () => handleOnClickCheckBox(filter.code) }
                />
                <div className="radio-marker"></div>
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