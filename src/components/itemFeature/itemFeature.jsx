import React from 'react';

import { ReactComponent as LogoInfinity } from '../../assets/icons/infinity.svg';
import { ReactComponent as LogoGauge } from '../../assets/icons/gauge.svg';
import { ReactComponent as LogoLeaf1 } from '../../assets/icons/leaf1.svg';
import { ReactComponent as LogoShoppingCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as LogoPriceRibbon } from '../../assets/icons/price-ribbon.svg';
import { ReactComponent as LogoShop } from '../../assets/icons/shop.svg';
import './itemFeature.scss';


const ItemFeature = ( { title, describe, icon } ) => {
    return (
        <div className="feature">
            <div className="feature__list">
                <h4 className="feature__heading-4 heading-4">{title}</h4>
                {
                    icon === 'infinity' ? <LogoInfinity className="feature__icon"/> : null}
                {
                    icon === 'gauge' ? <LogoGauge className="feature__icon"/> : null
                }
                {
                    icon === 'leaf1' ? <LogoLeaf1 className="feature__icon"/> : null
                }
                {
                    icon === 'shopping-cart' ? <LogoShoppingCart className="feature__icon"/> : null
                }
                {
                    icon === 'price-ribbon' ? <LogoPriceRibbon className="feature__icon"/> : null
                }
                {
                    icon === 'shop' ? <LogoShop className="feature__icon"/> : null
                }
            </div>

            <p className="feature__paragraph-2 paragraph-2">
                {describe}
            </p>
        </div>
    );
}


export default ItemFeature;