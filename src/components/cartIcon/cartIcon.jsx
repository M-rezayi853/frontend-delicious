import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShopIcon } from '../../assets/icons/shopping-bag.svg';
import './cartIcon.scss';

import { setHiddenCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ( { setHiddenCart, cartItemsCount } ) => {
    return (
        <div className="cartIcon" onClick={setHiddenCart}>
            <ShopIcon className="cartIcon__icon" />
            <span className="cartIcon__count">{cartItemsCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    setHiddenCart: () => dispatch(setHiddenCart())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);