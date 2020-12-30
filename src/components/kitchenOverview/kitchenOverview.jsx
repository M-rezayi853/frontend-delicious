import React from 'react';

import ItemKitchen from '../itemKitchen/itemKitchen';
import './kitchenOverview.scss';


const KitchenOverview = ( { title, items } ) => {
    return (
        <div className="kitchenOverview__con">
            <h1 className="kitchenOverview__heading-1 heading-1 heading-1-black">{title}<span>_and more</span></h1>
            <div className="kitchenOverview__list">

                {
                    items.filter((item, index) => 
                        index < 4
                    ).map(item => {
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
}


export default KitchenOverview;