import React from 'react';

import Filters from '../filters'
import Persons from '../persons'
import SearchBoard from '../search-board'

function App() {
    return (
        <div className="app">
            <SearchBoard />
            <Filters />
            <Persons />
        </div>
    );
}

export default App;