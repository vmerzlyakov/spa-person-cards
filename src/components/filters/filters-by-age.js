import React from 'react';

import { filtersSetByAge } from '../../constants/filter';

function FilterByAge({ checkedFilters, handleOnChange }) {
    return <div className="filter by-age">
        { filtersSetByAge.map(({ code }) => {
            return <label className="checkBox" key={ code }>
                <input
                    className="input"
                    type="checkbox"
                    name="sex"
                    checked={ !!checkedFilters[code] }
                    onChange={ () => handleOnChange(code) }
                />
                <div className="checkBox-marker">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.808 1.54818L11.4149 1.15511C11.2914 1.0315 11.1267 0.963501 10.9509 0.963501C10.7751 0.963501 10.6103 1.0315 10.4868 1.15511L4.96361 6.67823L1.51278 3.22731C1.38927 3.10389 1.22449 3.03579 1.04868 3.03579C0.872976 3.03579 0.708293 3.10389 0.584683 3.22731L0.191512 3.62028C0.0679024 3.74409 0 3.90896 0 4.08457C0 4.26028 0.0679024 4.42506 0.191512 4.54867L4.08771 8.44467C4.09288 8.45199 4.09834 8.45882 4.10468 8.46506L4.49785 8.8517C4.62137 8.97482 4.78615 9.03638 4.96332 9.03638H4.96537C5.14127 9.03638 5.30605 8.97482 5.42937 8.8517L5.82263 8.46165C5.82898 8.4554 5.83434 8.45023 5.83756 8.44496L11.8079 2.47521C12.064 2.2197 12.064 1.80399 11.808 1.54818Z" fill="#FFCC33"/>
                    </svg>
                </div>
                { code }
            </label>
        }) }
    </div>;
}

export default FilterByAge;