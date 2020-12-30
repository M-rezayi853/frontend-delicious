import React from 'react';

import KitchenOverview from '../kitchenOverview/kitchenOverview';
import './kitchenPreview.scss';


const KitchenPreview = ( { kitchenSections } ) => {
    return (
        <section className="kitchen">
            <h3 className="kitchen__heading-2 heading-2">
                Welcome to your kitchen! 
            </h3>
            
            {
                kitchenSections.map(kitchenSection => {
                    return (
                        <KitchenOverview 
                            key={kitchenSection.id}
                            title={kitchenSection.title}
                            items={kitchenSection.items}
                        />
                    )
                })
            }
        </section>
    );
}


export default KitchenPreview;