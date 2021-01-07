import React from 'react';

import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import CheckoutPreview from '../../components/checkoutPreview/checkoutPreview';
import Footer from '../../components/footer/footer';
import './checkout.scss';


const Checkout = () => {
    return (
        <div className="checkout-container">
           <HeaderKitchen />

           <CheckoutPreview />

           <Footer />
        </div>
    );
};


export default Checkout;