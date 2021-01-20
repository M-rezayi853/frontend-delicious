import { CartActionTypes } from './cart.types';

import { addItemToCart, removeItemFromCart, cleanItemFromCart } from './cart.utils';


const INITIAL_STATE = {
    hiddenCart: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_HIDDEN_CART:
            return {
                ...state,
                hiddenCart: !state.hiddenCart
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAN_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: cleanItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAER_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;   
    };
};


export default cartReducer;