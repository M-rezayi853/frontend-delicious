import React from 'react';

import './itemKitchen.scss';


const ItemKitchen = ( { item: { imgUrl, alt, name, price } } ) => {
    return (
        <div className="ItemKitchen__item">
            <figure className="ItemKitchen__show">
                <img className="ItemKitchen__img" src={imgUrl} alt={alt} />
                <button className="ItemKitchen__kitchBtn kitchBtn">add to cart</button>
            </figure>
            <div className="ItemKitchen__description">
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    );
}


export default ItemKitchen;