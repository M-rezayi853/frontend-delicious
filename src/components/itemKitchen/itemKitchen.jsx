import React from 'react';
import { connect } from 'react-redux';

import BtnKitchen from '../btnKitchen/btnKitchen';
import './itemKitchen.scss';

import { addItem } from '../../redux/cart/cart.actions';


const ItemKitchen = ( { item, addItem } ) => {
    const {imgUrl, alt, name, price} = item;

    return (
        <div className="ItemKitchen">
            <figure className="ItemKitchen__show">
                <img className="ItemKitchen__img" src={imgUrl} alt={alt} />
                <BtnKitchen 
                    nameClass="ItemKitchen__kitchBtn"
                    onClick={() => addItem(item)}
                >
                    add to cart
                </BtnKitchen>
            </figure>

            <div className="ItemKitchen__description">
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(ItemKitchen);