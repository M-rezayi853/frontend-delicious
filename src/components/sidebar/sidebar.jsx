import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ReactComponent as LogoMenu } from '../../assets/icons/menu11.svg';
import { ReactComponent as LogoCross } from '../../assets/icons/clear.svg';
import NavigationToggle from '../navigationToggle/navigationToggle';
import CartIcon from '../cartIcon/cartIcon';
import './sidebar.scss';


const animationTiming = {
    enter: 500,
    exit: 300
};

const Sidebar = ( { currentUser, toggleMenu, showMenu, hideMenu } ) => {
    return (
        <>
            <div className="sidebar">
                <button className="sidebar__btn" onClick={toggleMenu}>

                    <SwitchTransition>
                        <CSSTransition
                            key={showMenu}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames='rotate'
                        >
                            {
                                showMenu ? 
                                <LogoCross className="sidebar__icon" />
                                : <LogoMenu className="sidebar__icon" />
                            }
                        </CSSTransition>
                    </SwitchTransition>
                    
                    {/* {
                        showMenu ? 
                        <LogoCross className="sidebar__icon" />
                        : <LogoMenu className="sidebar__icon" />
                    } */}
                </button>

                <div className="sidebar__cartIcon">
                    <CartIcon />
                </div>
            </div>

            <CSSTransition 
                in={showMenu} 
                timeout={animationTiming} 
                // timeout={animationTiming}
                // classNames={{
                //     enter: 'sidebar__menuOpened',
                //     enterActive: 'sidebar__menuOpened',
                //     exit: 'sidebar__menuClosed',
                //     exitActive: 'sidebar__menuClosed'
                // }}
                classNames="toggle"
                mountOnEnter
                unmountOnExit
            >
                <div onClick={hideMenu}>
                    <NavigationToggle currentUser={currentUser} />
                </div>
            </CSSTransition>

            {/* {
                showMenu ? <div onClick={hideMenu}>
                <NavigationToggle currentUser={currentUser} />
                </div> : null
            } */}
        </>
    );
}


export default Sidebar;