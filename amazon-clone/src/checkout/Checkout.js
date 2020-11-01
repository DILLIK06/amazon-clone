import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://image.shutterstock.com/image-photo/amazon-prime-subscription-service-outdoor-260nw-1620340684.jpg"
                    alt="advertisment_banner"
                />
                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
