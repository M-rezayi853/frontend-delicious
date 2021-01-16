import React from 'react';

import './withSpinner.scss';


const WithSpinner = WrappedComponent => {
    const Spinner = ( { isLoading, ...otherProps } ) => {
        return isLoading ? (
            <div className="withSpinner__overlay">
                <div className="withSpinner__container" />
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };

    return Spinner;
};


export default WithSpinner;