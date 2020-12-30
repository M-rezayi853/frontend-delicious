import React, { useState } from 'react';

import ItemMeal from '../itemMeal/itemMeal';
import DIRECTORY_MEAL_DATA from './directoryMeal.data';
import './directoryMeal.scss';


const DirectoryMeal = () => {
    const [sectionMeals] = useState(DIRECTORY_MEAL_DATA);
    
    return (
        <div className="directoryMeal__list">
            {sectionMeals.map(sectionMeal => {
                return (
                    <ItemMeal 
                        key={sectionMeal.id}
                        {...sectionMeal}
                    />
                )
            })}
        </div>
    );
}


export default DirectoryMeal;