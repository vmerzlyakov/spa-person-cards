import React from 'react';
import { connect } from 'react-redux';

import FilterByAge from './filters-by-age';
import FilterByGender from './filters-by-gender';
import SearchBar from '../search-bar';

import { setFilterByGender, setFilterByAge } from '../../actions/filters';
import { filterPersons } from '../../actions/persons';

function Filters({
    checkedFiltersByAge,
    checkedFilterByGender,
    filterPersons,
    setFilterByAge,
    setFilterByGender
}) {
    const filtersSet = {
        filterByAge: checkedFiltersByAge,
        filterByGender: checkedFilterByGender
    };

    const handleOnClickCheckBox = filter => {
        setFilterByAge(filter);
        filterPersons();
    };
    
    const handleOnClickRadio = filter => {
        setFilterByGender(filter);
        filterPersons();
    };

    return (
        <>
            <SearchBar />
            <div className="filters-wrapper">
                <FilterByGender
                    checkedFilter={ checkedFilterByGender }
                    handleOnChange={ handleOnClickRadio }
                />
                <FilterByAge
                    checkedFilters={ checkedFiltersByAge }
                    handleOnChange={ handleOnClickCheckBox }
                />
            </div>
        </>
    );
}


const mapStateToProps = state => ({
    checkedFilterByGender: state.filtersReducer.filterByGender,
    checkedFiltersByAge: state.filtersReducer.filtersByAge
});

const mapDispatchToProps = {
    filterPersons,
    setFilterByGender,
    setFilterByAge
};

const filtersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default filtersContainer;