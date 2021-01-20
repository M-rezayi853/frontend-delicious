import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/logo.png';
import CartIcon from '../cartIcon/cartIcon';
import './navigation.scss';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

// import { auth } from '../../firebase/firebase.utils';


const Navigation = ( { nameClass, history, location, currentUser, signOutStart } ) => {
    return (
        <nav className={`navigation ${nameClass}`}>
            <img className="navigation__img" onClick={() => history.push('/')} src={logo} alt="logo" />

            <ul className="navigation__nav">
                <li><Link to="/">home</Link></li>
                <li><Link to="/kitchen">kitchen</Link></li>
                <li><Link to="/aboutme">about me</Link></li>
                {/* {
                    currentUser ? 
                    <li onClick={() => auth.signOut()}><Link to={`${location.url}`}>sign out</Link></li>
                    : <li><Link to="/signin">sign in</Link></li>
                } */}
                {
                    currentUser ? 
                    <li onClick={() => signOutStart()}><Link to={`${location.pathname}`}>sign out</Link></li>
                    : <li><Link to="/signin">sign in</Link></li>
                }
            </ul>
            <div className="navigation__icon"><CartIcon /></div>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));