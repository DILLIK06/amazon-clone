import React from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                        {basket ? basket.length : 0} items</Link>)
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user ? user.email : ''}</p>
                        <p>123 React Lane</p>
                        <p>Los Angels, CA</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                proce={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment Methid */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Methid</h3>
                    </div>
                    <div className="payment_details">
                            {/*Stripe Magic will go here */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
