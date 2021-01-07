import { MenuActionTypes } from './menu.types';


export const setShowMenu = () => ({
    type: MenuActionTypes.SET_SHOW_MENU
});

export const hideMenu = () => ({
    type: MenuActionTypes.HIDE_MENU
});