import DIRECTORY_MEAL_DATA from './directoryMeal.data';


const INITIAL_STATE = {
    sectionMeals: DIRECTORY_MEAL_DATA
};

const directoryMealReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};


export default directoryMealReducer;