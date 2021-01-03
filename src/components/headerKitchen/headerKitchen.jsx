import React from 'react';

import Navigation from '../navigation/navigation';
import './headerKitchen.scss';


const HeaderKitchen = ( { currentUser } ) => {
    return (
        <header className="headerKitchen">
            <Navigation currentUser={currentUser} />
        </header>
    );
}


export default HeaderKitchen;