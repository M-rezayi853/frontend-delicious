import { createSelector } from 'reselect';


const selectKitchen = state => state.kitchen;

export const selectKitchenCollections = createSelector(
    [selectKitchen],
    kitchen => kitchen.collections
);

export const selectKitchenCollectionsForPreview = createSelector(
    [selectKitchenCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectKitchenCollectionsUrl = collectionUrlParam => createSelector(
    [selectKitchenCollections],
    collections => collections[collectionUrlParam]
);