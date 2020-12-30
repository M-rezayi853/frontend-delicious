import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './navigation.scss';


const Navigation = ( { nameClass, history } ) => {
    return (
        <nav className={`navigation ${nameClass}`}>
            <img className="navigation__img" onClick={() => history.push('/')} src={logo} alt="logo" />

            <ul className="navigation__nav">
                <li><Link to="/">home</Link></li>
                <li><Link to="/kitchen">kitchen</Link></li>
                <li><Link to="/aboutme">about me</Link></li>
                <li><Link to="/signin">sign in</Link></li>
            </ul>
        </nav>
    );
}


export default withRouter(Navigation);