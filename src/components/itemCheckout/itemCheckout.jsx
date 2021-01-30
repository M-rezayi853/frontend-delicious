import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as IconMinus } from '../../assets/icons/minus.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconTrash } from '../../assets/icons/trash.svg';
import { ReactComponent as IconClipboard } from '../../assets/icons/clipboard.svg';
import { ReactComponent as IconShop } from '../../assets/icons/shop.svg';
import { ReactComponent as IconTruck } from '../../assets/icons/truck2.svg';
import { ReactComponent as IconCredit } from '../../assets/icons/credit.svg';
import './itemCheckout.scss';

import { addItem, removeItem, cleanItemFromCart } from '../../redux/cart/cart.actions';


const ItemCheckout = ( { cartItem, addItem, removeItem, cleanItem } ) => {

    const { imgUrl, alt, name, quantity, price } = cartItem;
    const prices = price * quantity;

    return (
        <div className="itemCheckout">
            <div className="itemCheckout__img">
                <div className="itemCheckout__quantity">
                    <div className="itemCheckout__value">
                        <IconMinus className="itemCheckout__icon" onClick={() => removeItem(cartItem)} />
                        <span>{quantity}</span>
                        <IconPlus className="itemCheckout__icon" onClick={() => addItem(cartItem)} />
                    </div>

                    <IconTrash className="itemCheckout__icon" onClick={() => cleanItem(cartItem)} />
                </div>

                <img src={imgUrl} alt={alt} />
            </div>
            
            <div className="itemCheckout__description">
                <h4 className="heading-4">{name}</h4>

                <div className="itemCheckout__text">
                    <IconClipboard className="itemCheckout__icon-text" />
                    <span>guarantee of health and organic</span>
                </div>
                <div className="itemCheckout__text">
                    <IconShop className="itemCheckout__icon-text" />
                    <span>available in delicious kitchen</span>
                </div>
                <div className="itemCheckout__text">
                    <IconTruck className="itemCheckout__icon-text" />
                    <span>fast supermarket delivery</span>
                </div>
            </div>

            <div className="itemCheckout__price">
                <IconCredit className="itemCheckout__icon-text" />
                <span>{prices.toFixed(2)}</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    cleanItem: (item) => dispatch(cleanItemFromCart(item))
});


export default connect(null, mapDispatchToProps)(ItemCheckout);