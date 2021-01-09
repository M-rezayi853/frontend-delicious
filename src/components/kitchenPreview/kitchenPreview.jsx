import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import KitchenOverview from '../kitchenOverview/kitchenOverview';
import './kitchenPreview.scss';

import { selectKitchenCollectionsForPreview } from '../../redux/kitchen/kitchen.selectors';


const KitchenPreview = ( { collections } ) => {
    return (
        <section className="kitchen">
            <h3 className="kitchen__heading-2 heading-2">
                Welcome to your kitchen! 
            </h3>
            
            {
                collections.map(collection => {
                    return (
                        <KitchenOverview 
                            key={collection.id}
                            title={collection.title}
                            routeName={collection.routeName}
                            items={collection.items}
                        />
                    )
                })
            }
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectKitchenCollectionsForPreview
});


export default connect(mapStateToProps)(KitchenPreview);