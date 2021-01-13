import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemCheckout from '../itemCheckout/itemCheckout';
import ButtonStripe from '../buttonStripe/buttonStripe';
import './checkoutPreview.scss';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';


const CheckoutPreview = ( { cartItems, cartItemsTotal } ) => {
    return (
        <div className="checkoutPreview">
            <div className="checkoutPreview__title">
                <h3 className="checkoutPreview__heading-3 heading-3-light">You are in your shopping cart!</h3>
            </div>
            

            {/* <div className="checkoutPreview__list">
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
            </div> */}

            <div>
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
            </div>
            

            <div className="checkoutPreview__total">
                <span>total:  ${cartItemsTotal.toFixed(2)}</span>
            </div>

            <div className="checkoutPreview__stripe">
                <h3 className="checkoutPreview__heading-6 heading-6-red">*Please use the following test credit card for payments*</h3>
                <h4 className="checkoutPreview__heading-6 heading-6-green">4242 4242 4242 4242 - Exp: 12/22 - CVV: 123</h4>

                <ButtonStripe price={cartItemsTotal} />
            </div>
            
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});


export default connect(mapStateToProps)(CheckoutPreview);