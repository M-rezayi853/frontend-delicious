import { createSelector } from 'reselect';


const selectFeature = state => state.feature;

export const selectFeatureSections = createSelector(
    [selectFeature],
    feature => feature.featureSections
);