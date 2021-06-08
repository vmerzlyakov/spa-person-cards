import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar-wrapper">
            <input
                className="search-bar"
                placeholder="Начните вводить..."
                key="searchBar"
            />
            <div className="magnifier">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.05263" cy="8.1579" r="7.05263" stroke="#C1C1C1" strokeWidth="2"/>
                    <line x1="12.3387" y1="12.8192" x2="17.7071" y2="18.1876" stroke="#C1C1C1" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
}

export default SearchBar;