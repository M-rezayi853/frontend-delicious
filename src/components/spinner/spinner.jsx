import React from 'react';

import './spinner.scss';


const Spinner = () => {
    return (
        <div className="withSpinner__overlay">
            <div className="withSpinner__container" />
        </div>
    );
};


export default Spinner;