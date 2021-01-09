import React from 'react';
import { connect } from 'react-redux';

import KitchenCollectionPreview from '../../components/kitchenCollectionPreview/kitchenCollectionPreview';
import './kitchenCollection.scss';

import { selectKitchenCollectionsUrl } from '../../redux/kitchen/kitchen.selectors';


const KitchenCollection = ( { collection } ) => {
    return (
        <section className="kitchenCollection">
            <h3 className="kitchenCollection__heading-2 heading-2">
                You are in your kitchen! 
            </h3>

            <KitchenCollectionPreview collection={collection} />
        </section>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectKitchenCollectionsUrl(ownProps.match.params.kitchenCollectionId)(state)
});


export default connect(mapStateToProps)(KitchenCollection);