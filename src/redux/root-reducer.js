import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import sessionStorage from 'redux-persist/lib/storage/session';

import userReducer from './user/user.reducer';
import menuReducer from './menu/menu.reducer';
import cartReducer from './cart/cart.reducer';
import kitchenReducer from './kitchen/kitchen.reducer';
import directoryReducer from './directory/directory.reducer';
import directoryMealReducer from './directoryMeal/directoryMeal.reducer';
import featureReducer from './feature/feature.reducer';


const persistConfig = {
    key: 'root',
    storage,
    // storage: sessionStorage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    menu: menuReducer,
    cart: cartReducer,
    kitchen: kitchenReducer,
    directory: directoryReducer,
    directoryMeal: directoryMealReducer,
    feature: featureReducer
});


export default persistReducer(persistConfig, rootReducer);