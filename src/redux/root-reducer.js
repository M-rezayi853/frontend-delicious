import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import menuReducer from './menu/menu.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,
    menu: menuReducer,
    cart: cartReducer
});