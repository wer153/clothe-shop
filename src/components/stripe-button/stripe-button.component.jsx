import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Ht3xIIQhmXHnA8ZixHjDOVGKsAbrvEs2sPwNzwfuK0vz1NGf691rn11euuFMGIYpSAQhKomqFAtANqwbyTej69J00F6cYQ2ck'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="MINKI's WEBSITE"
            billingAdress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            descripttion={`Your total is ${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton