import React from 'react';

import './itemMeal.scss';


const ItemMeal = ( { mealClass, imgUrl, id } ) => {
    return (
        <figure className={`itemMeal__show itemMeal__${mealClass}`}>
            <img className="itemMeal__img" src={imgUrl} alt={`meal ${id}`} />
        </figure>
    );
}


export default ItemMeal;