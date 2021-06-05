import React from 'react';

function SearchBoard() {
    return (
        <div className="search-board-wrapper">
            <input
                className="search-board"
                placeholder="Начните вводить"
                key="searchBoard"
            />
        </div>
    );
}

export default SearchBoard;