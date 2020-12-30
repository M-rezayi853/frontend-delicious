import React from 'react';

import './inputForm.scss';


const InputForm = ( { handleChange, label, ...otherProps } ) => {
    return (
        <div className="inputForm__list">
            <input className="inputForm__input" onChange={handleChange} {...otherProps} />

            {
                label ? 
                <label className={`inputForm__label ${otherProps.value ? 'shrink' : null}`}>
                    {label}
                </label>
                : null
            }
        </div>
    );
}


export default InputForm;