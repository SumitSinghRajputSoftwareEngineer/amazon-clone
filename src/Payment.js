import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = (e) =>{
        //do all the fancy stripe operations
    }
    const handleChange = (event) =>{
        //listen for changes in the CardElement
        // and display ant errors = as the customer types their card details
        setDisabled(event.empty);
        setError(event.error?event.error.message:"");
    }
  return (
    <div className='payment'>
      <div className="payment_container">
        <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
        {/*Payment section - delivery address*/}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Madhya Pradesh,India</p>
            </div>
        </div>
        {/*Payment section - delivery address*/}
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
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        {/*Payment section - delivery address*/}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Mathod</h3>
            </div>
            <div className="payment_details">
                {/*Stripe operation will happen here*/}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment_priceContainer">
                            <CurrencyFormat
                             renderText={(value) => (
                                <>
                                    <h3>Order Total: {value}</h3>
                                </>
                             )}
                             decimalScale={2}
                             value={getBasketTotal(basket)}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"₹"}
                            />
                        </div>
                    </form>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Payment 