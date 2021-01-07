import React from 'react';

import './btnKitchen.scss';


const BtnKitchen = ( { nameClass, children, ...otherProps } ) => {
    return (
        <button className={`kitchBtn ${nameClass}`} {...otherProps}>
            {children}
        </button>
    );
};


export default BtnKitchen;