import React from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    
    const [{user, basket }, dispatch] = useStateValue();

    return (
        <div className="payment">
             <div className="payment__container">
                  <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>3/210 Lane, near colombus garden</p>
                            <p>Gravity, US</p>
                        </div>                      
                  </div>
                  <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                            ))}
                        </div> 
                  </div>
                  <div className="payment__section">

                  </div>
             </div>
        </div>
    )
}

export default Payment;
