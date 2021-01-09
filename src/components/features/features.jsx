import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemFeature from '../itemFeature/itemFeature';
import './features.scss';

import { selectFeatureSections } from '../../redux/feature/feature.selectors';


const Features = ( { featureSections } ) => {
    // const [featureSections] = useState(FEATURES_DATA);

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
};

const mapStateToProps = createStructuredSelector({
    featureSections: selectFeatureSections
});


export default connect(mapStateToProps)(Features);