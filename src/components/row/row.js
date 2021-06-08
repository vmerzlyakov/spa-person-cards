import React from 'react';

export default function Row({ cellName, cellValue }) {
    return (
        <div className="row">
            <label className="cell cell-name">
                { `${cellName}:` }
            </label>
            <label className="cell cell-value">
                { cellValue }
            </label>
        </div>
    );
}