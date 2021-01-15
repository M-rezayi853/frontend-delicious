import React, { useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import Footer from '../../components/footer/footer';
import KitchenPreview from '../../components/kitchenPreview/kitchenPreview';
import KitchenCollection from '../kitchenCollection/kitchenCollection';
import './kitchen.scss';

import { updateKitchenCollections } from '../../redux/kitchen/kitchen.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const Kitchen = ( { match, updateKitchenCollections } ) => {
    // const [kitchenSections] = useState(KITCHEN_DATA);

    let unsubscribeFormSnapshot = useRef(null);

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        unsubscribeFormSnapshot.current = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateKitchenCollections(collectionsMap);
        });

        return () => unsubscribeFormSnapshot;
    }, [updateKitchenCollections]);

    return (
        <div className="pure-container">
            <HeaderKitchen />

            <Route exact path={`${match.path}`} component={KitchenPreview} />
            <Route path={`${match.path}/:kitchenCollectionId`} component={KitchenCollection} />

            <Footer />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateKitchenCollections: (collectionsMap) => dispatch(updateKitchenCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(Kitchen);