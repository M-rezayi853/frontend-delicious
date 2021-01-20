import { CartActionTypes } from './cart.types';


export const setHiddenCart = () => ({
    type: CartActionTypes.SET_HIDDEN_CART
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const cleanItemFromCart = item => ({
    type: CartActionTypes.CLEAN_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAER_CART
});