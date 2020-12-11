import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
                alt="" 
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket.
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
