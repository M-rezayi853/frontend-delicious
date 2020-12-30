import React, { useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import Footer from '../../components/footer/footer';
import KitchenPreview from '../../components/kitchenPreview/kitchenPreview';
import KITCHEN_DATA from './kitchen.data';
import './kitchen.scss';


const Kitchen = () => {
    const [kitchenSections] = useState(KITCHEN_DATA);

    return (
        <div className="pure-container">
            <Sidebar />
            <HeaderKitchen />

            <KitchenPreview kitchenSections={kitchenSections} />

            <Footer />
        </div>
    );
} 


export default Kitchen;