import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import KitchenCollection from './kitchenCollection';
import WithSpinner from '../../components/withSpinner/withSpinner';

import { selectIsCollectionLoaded } from '../../redux/kitchen/kitchen.selectors';


const KitchenCollectionSpinner = WithSpinner(KitchenCollection);

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});


export default connect(mapStateToProps)(KitchenCollectionSpinner);