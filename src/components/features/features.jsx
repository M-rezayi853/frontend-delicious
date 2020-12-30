import React, { useState } from 'react';

import ItemFeature from '../itemFeature/itemFeature';
import FEATURES_DATA from './features.data';
import './features.scss';


const Features = () => {
    const [featureSections] = useState(FEATURES_DATA);

    return (
        <section className="features">
            {
                featureSections.map(featureSection => {
                    return (
                        <ItemFeature 
                            key={featureSection.id}
                            {...featureSection}
                        />
                    )
                })
            }
        </section>
    );
}


export default Features;