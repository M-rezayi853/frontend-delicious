import React, { useState } from 'react';

import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import Footer from '../../components/footer/footer';
import KitchenPreview from '../../components/kitchenPreview/kitchenPreview';
import KITCHEN_DATA from './kitchen.data';
import './kitchen.scss';


const Kitchen = ( { currentUser } ) => {
    const [kitchenSections] = useState(KITCHEN_DATA);

    return (
        <div className="pure-container">
            <HeaderKitchen currentUser={currentUser} />

            <KitchenPreview kitchenSections={kitchenSections} />

            <Footer />
        </div>
    );
} 


export default Kitchen;