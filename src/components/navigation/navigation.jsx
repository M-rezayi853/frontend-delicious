import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/logo.png';
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import './navigation.scss';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHiddenCart } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';


const Navigation = ( { nameClass, history, match, currentUser, hiddenCart, home, sign } ) => {
    return (
        <nav className={`navigation ${nameClass}`}>
            <img className="navigation__img" onClick={() => history.push('/')} src={logo} alt="logo" />

            <ul className="navigation__nav">
                <li><Link to="/">home</Link></li>
                <li><Link to="/kitchen">kitchen</Link></li>
                <li><Link to="/aboutme">about me</Link></li>
                {
                    currentUser ? 
                    <li onClick={() => auth.signOut()}><Link to={`${match.url}`}>sign out</Link></li>
                    : <li><Link to="/signin">sign in</Link></li>
                }
            </ul>
            <div className="navigation__icon"><CartIcon /></div>

            {
                hiddenCart ? null : <CartDropdown nameClass={home} nameClass2={sign} />
            }
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectHiddenCart
});


export default withRouter(connect(mapStateToProps)(Navigation));