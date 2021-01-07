import { MenuActionTypes } from './menu.types';


const INITIAL_STATE = {
    showMenu: false
};

const menuReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case MenuActionTypes.SET_SHOW_MENU:
            return {
                ...state,
                showMenu: !state.showMenu
            }
        case MenuActionTypes.HIDE_MENU:
            return {
                ...state,
                showMenu: false
            }
        default:
            return state;
    };
};


export default menuReducer;