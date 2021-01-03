import React from 'react';

import { ReactComponent as ShopIcon } from '../../assets/icons/shopping-bag.svg';
import './cartIcon.scss';


const CartIcon = () => {
    return (
        <div className="cartIcon">
            <ShopIcon className="cartIcon__icon" />
            <span className="cartIcon__count">0</span>
        </div>
    );
};


export default CartIcon;