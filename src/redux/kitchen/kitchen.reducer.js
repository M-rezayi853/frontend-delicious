// import KITCHEN_DATA from './kitchen.data';

import { KitchenActionTypes } from './kitchen.types';


const INITIAL_STATE = {
    // collections: KITCHEN_DATA
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const kitchenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KitchenActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case KitchenActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case KitchenActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    };
};


export default kitchenReducer;