import React from 'react';

import './itemCart.scss';


const ItemCart = ( { item: { imgUrl, alt, name, price, quantity } } ) => {
    return (
        <div className="itemCart">
            <img className="itemCart__img" src={imgUrl} alt={alt} />
            <div className="itemCart__details">
                <span className="itemCart__name">{name}</span>
                <span className="itemCart__price">{quantity} x ${price}</span>
            </div>
        </div>
    );
};


export default ItemCart;