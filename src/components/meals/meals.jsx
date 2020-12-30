import React from 'react';

import DirectoryMeal from '../directoryMeal/directoryMeal';
import './meals.scss';


const Meals = () => {
    return (
        <section className="meals">
            <h3 className="meals__heading-2 heading-2">
                we are proud of your satisfaction
            </h3>

            <p className="meals__paragraph-1 paragraph-1">
                The delicious organic foods has a massive collection of recipes that are subnitted, reted and reviewed by people who are passionate about food.<br />
                join our food community, browsw recipes, shop for kitchen, cooking, and home products, enter our contests, and get ...
            </p>

            <DirectoryMeal />
        </section>
    );
}


export default Meals;