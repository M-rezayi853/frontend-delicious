import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemCheckout from '../itemCheckout/itemCheckout';
import './checkoutPreview.scss';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';


const CheckoutPreview = ( { cartItems, cartItemsTotal } ) => {
    return (
        <div className="checkoutPreview">
            <div className="checkoutPreview__list">
                <div className="checkoutPreview__block">
                    <span>product</span>
                </div>
                <div className="checkoutPreview__block">
                    <span>description</span>
                </div>
                <div className="checkoutPreview__block">
                    <span>quantity</span>
                </div>
                <div className="checkoutPreview__block">
                    <span>price</span>
                </div>
                <div className="checkoutPreview__block">
                    <span>remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => {
                    return (
                        <ItemCheckout 
                            key={cartItem.id}
                            cartItem={cartItem}
                        />
                    )
                })
            }

            <div className="checkoutPreview__total">
                <span>total:  ${cartItemsTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});


export default connect(mapStateToProps)(CheckoutPreview);