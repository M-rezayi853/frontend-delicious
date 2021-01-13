import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { ReactComponent as LogoMenu } from '../../assets/icons/menu11.svg';
import { ReactComponent as LogoCross } from '../../assets/icons/clear.svg';
import logoImgBlack from '../../assets/logo-black.png';
import NavigationToggle from '../navigationToggle/navigationToggle';
import CartIcon from '../cartIcon/cartIcon';
import './sidebar.scss';

import { selectShowMenu } from '../../redux/menu/menu.selectors';
import { setShowMenu, hideMenu } from '../../redux/menu/menu.actions';


const animationTiming = {
    enter: 500,
    exit: 300
};

const Sidebar = ( { showMenu, setShowMenu, hideMenu, history } ) => {
    return (
        <>
            <div className="sidebar">
                <button className="sidebar__btn" onClick={setShowMenu}>
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

                <img 
                    className="sidebar__img"
                    src={logoImgBlack} 
                    alt="logo black" 
                    onClick={() => history.push('/')}
                />

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
                    <NavigationToggle />
                </div>
            </CSSTransition>

            {/* {
                showMenu ? <div onClick={hideMenu}>
                <NavigationToggle currentUser={currentUser} />
                </div> : null
            } */}
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    showMenu: selectShowMenu
});

const mapDispatchToProps = dispatch => ({
    setShowMenu: () => dispatch(setShowMenu()),
    hideMenu: () => dispatch(hideMenu())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));