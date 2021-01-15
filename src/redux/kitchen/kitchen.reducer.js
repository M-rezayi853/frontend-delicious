// import KITCHEN_DATA from './kitchen.data';

import { KitchenActionTypes } from './kitchen.types';


const INITIAL_STATE = {
    // collections: KITCHEN_DATA
    collections: null
};

const kitchenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KitchenActionTypes.UPDATE_KITCHEN_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    };
};


export default kitchenReducer;