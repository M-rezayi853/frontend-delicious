import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import KitchenPreview from './kitchenPreview';
import WithSpinner from '../withSpinner/withSpinner';

import { selectIsCollectionFetching } from '../../redux/kitchen/kitchen.selectors';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const KitchenPreviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner    
)(KitchenPreview);


// const KitchenPreviewSpinner = WithSpinner(KitchenPreview);


// export default connect(mapStateToProps)(KitchenPreviewSpinner);
export default KitchenPreviewContainer;
