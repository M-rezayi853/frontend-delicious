import FEATURE_DATA from './feature.data';


const INITIAL_STATE = {
    featureSections: FEATURE_DATA
};

const featureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};


export default featureReducer;