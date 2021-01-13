import React from 'react';

import ItemKitchen from '../itemKitchen/itemKitchen';
import './kitchenCollectionPreview.scss';


const KitchenCollectionPreview = ( { collection: { title, items } } ) => {
    return (
        <div className="kitchenCollectionPreview__con">
            <h1 className="kitchenCollectionPreview__heading-5 heading-5 heading-5-black">
                {title}
                <span> foods</span>
            </h1>
            <div className="kitchenCollectionPreview__list">
                {
                    items.map(item => {
                        return (
                            <ItemKitchen 
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};


export default KitchenCollectionPreview;