import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemMeal from '../itemMeal/itemMeal';
import './directoryMeal.scss';

import { selectDirectorySectionMeals } from '../../redux/directoryMeal/directoryMeal.selectors';


const DirectoryMeal = ( { sectionMeals } ) => {
    // const [sectionMeals] = useState(DIRECTORY_MEAL_DATA);
    
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
};

const mapStateToProps = createStructuredSelector({
    sectionMeals: selectDirectorySectionMeals
});


export default connect(mapStateToProps)(DirectoryMeal);