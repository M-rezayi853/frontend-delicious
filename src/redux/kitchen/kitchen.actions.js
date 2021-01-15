import { KitchenActionTypes } from './kitchen.types';

export const updateKitchenCollections = collectionsMap => ({
    type: KitchenActionTypes.UPDATE_KITCHEN_COLLECTIONS,
    payload: collectionsMap
});