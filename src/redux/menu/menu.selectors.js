import { createSelector } from 'reselect';


const selectMenu = state => state.menu;

export const selectShowMenu = createSelector(
    [selectMenu],
    menu => menu.showMenu
);