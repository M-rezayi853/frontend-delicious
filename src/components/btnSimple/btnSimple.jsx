import React from 'react';

import './btnSimple.scss';


const BtnSimple = ( { children, nameClass, googleColor, ...otherProps } ) => {
    return (
        <button className={`${googleColor ? 'google' : ''} ${nameClass} btnSimple`} {...otherProps}>
            {children}
        </button>
    );
};


export default BtnSimple;