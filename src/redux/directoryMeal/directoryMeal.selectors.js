import { createSelector } from 'reselect';


const selectDirectoryMeal = state => state.directoryMeal;

export const selectDirectorySectionMeals = createSelector(
    [selectDirectoryMeal],
    directoryMeal => directoryMeal.sectionMeals
);