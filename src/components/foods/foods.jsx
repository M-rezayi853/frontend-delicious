import React from 'react';

import Directory from '../directory/directory';
import './foods.scss';

const Foods = () => {
    return (
        <section className="foods">
            <h3 className="foods__heading-2 heading-2">
                Choose your favorite food
            </h3>

            <Directory />
        </section>
    );
}


export default Foods;