import KITCHEN_DATA from './kitchen.data';


const INITIAL_STATE = {
    collections: KITCHEN_DATA
};

const kitchenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};


export default kitchenReducer;