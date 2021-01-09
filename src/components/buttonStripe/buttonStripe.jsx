import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ( { price } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HnnWLIftodrZculw9SlvQtlqDEtJs6XubxHfi0bNTEirepwZYbDedK4zwWcIlmQyyJGQTeuLFm2Jf5wPxyj3wSc00TggeWXfE';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='delicious organic foods'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;