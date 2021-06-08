import React from 'react';

export default function Row({ cellName, cellValue, withShadow }) {
    return (
        <div className={ withShadow ? "row row-shadow" : "row" }>
            <label className="cell cell-name">
                { `${cellName}:\u00a0` }
            </label>
            <label className="cell cell-value">
                { cellValue }
            </label>
        </div>
    );
}