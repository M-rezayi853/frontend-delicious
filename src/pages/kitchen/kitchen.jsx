import React from 'react';
import { Route } from 'react-router-dom';

import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import Footer from '../../components/footer/footer';
import KitchenPreview from '../../components/kitchenPreview/kitchenPreview';
import KitchenCollection from '../kitchenCollection/kitchenCollection';
import './kitchen.scss';


const Kitchen = ( { match } ) => {
    // const [kitchenSections] = useState(KITCHEN_DATA);

    return (
        <div className="pure-container">
            <HeaderKitchen />

            <Route exact path={`${match.path}`} component={KitchenPreview} />
            <Route path={`${match.path}/:kitchenCollectionId`} component={KitchenCollection} />

            <Footer />
        </div>
    );
};


export default Kitchen;