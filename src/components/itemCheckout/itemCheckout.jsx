import React from 'react';
import { connect } from 'react-redux';

import './itemCheckout.scss';

import { addItem, removeItem, cleanItemFromCart } from '../../redux/cart/cart.actions';


const ItemCheckout = ( { cartItem, addItem, removeItem, cleanItem } ) => {

    const { imgUrl, alt, name, quantity, price } = cartItem;
    const prices = price * quantity;

    return (
        <div className="itemCheckout">
            <div className="itemCheckout__img">
                <img src={imgUrl} alt={alt} />
            </div>
            <span className="itemCheckout__name">{name}</span>
            <span className="itemCheckout__quantity">
                <div className="itemCheckout__arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="itemCheckout__value">{quantity}</span>
                <div className="itemCheckout__arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="itemCheckout__price">${prices.toFixed(2)}</span>
            <div className="itemCheckout__remove" onClick={() => cleanItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    cleanItem: (item) => dispatch(cleanItemFromCart(item))
});


export default connect(null, mapDispatchToProps)(ItemCheckout);