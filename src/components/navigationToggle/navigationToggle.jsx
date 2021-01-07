import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cartIcon/cartIcon';
import './navigationToggle.scss';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { auth } from '../../firebase/firebase.utils';


const NavigationToggle = ( { match, currentUser } ) => {
    return (
        <nav className="navigationToggle">

            <ul className="navigationToggle__nav">
                <li><Link to="/">home</Link></li>
                <li><Link to="/kitchen">kitchen</Link></li>
                <li><Link to="/aboutme">about me</Link></li>
                {
                    currentUser ? 
                    <li onClick={() => auth.signOut()}><Link to={`${match.url}`}>sign out</Link></li>
                    : <li><Link to="/signin">sign in</Link></li>
                }
            </ul>
            <div className="navigationToggle__icon"><CartIcon /></div>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


export default withRouter(connect(mapStateToProps)(NavigationToggle));