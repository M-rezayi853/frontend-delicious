import React from 'react';
import { withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import ButtonHover from '../buttonHover/buttonHover';
import SeenonLogos from '../seenonLogos/seenonLogos';
import './header.scss';


const Header = ( { history, currentUser } ) => {
    return (
        <header className="header">
            <Navigation currentUser={currentUser} />

            <h3 className="header__heading-3 heading-3 heading-3-light">Your own food:</h3>
            <h1 className="header__heading-1 heading-1">The delicious organic foods</h1>
            <ButtonHover 
                nameClass={'header__btn'}
                text1={'View our property'}
                text2={'And chose one!'}
                onClick={() => history.push('/kitchen')}
            />

            <div className="header__seenon-text">Seen on</div>

            <SeenonLogos />
        </header>
    );
}


export default withRouter(Header);