import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import BtnSimple from '../btnSimple/btnSimple';
import ItemCart from '../itemCart/itemCart';
import './cartDropdown.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setHiddenCart } from '../../redux/cart/cart.actions';


const CartDropdown = ( { cartItems, nameClass, nameClass2, history, setHiddenCart } ) => {
    return (
        <div className={`cartDropdown ${nameClass} ${nameClass2}`}>
            <div className="cartDropdown__items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => {
                        return <ItemCart 
                            key={cartItem.id}
                            item={cartItem}
                        />
                    })
                    : <span className="paragraph-2">Your cart is empty</span>
                }
            </div>

            <div className="cartDropdown__button">
                <BtnSimple 
                    nameClass="cartDropdown__btn"
                    onClick={() => {
                        history.push('/checkout')
                        setHiddenCart()
                    }}
                >
                    go to checkout
                </BtnSimple>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    setHiddenCart: () => dispatch(setHiddenCart())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));