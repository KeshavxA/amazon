import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import { formatCurrency } from '../utils/formatCurrency';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleBuyNow = () => {
    setProcessing(true);
    
    // Simulate a payment processing delay of 2 seconds
    setTimeout(() => {
      setProcessing(false);
      navigate('/orders');
      dispatch({ type: 'EMPTY_BASKET' });
    }, 2000);
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
            )
        </h1>

        {/* Feature 10: Address Form */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email || 'Guest'}</p>
            <form className="payment__addressForm">
              <input type="text" placeholder="Address Line 1" />
              <input type="text" placeholder="Address Line 2" />
              <input type="text" placeholder="City, State, Zip" />
              <button onClick={e => e.preventDefault()}>Save Address</button>
            </form>
          </div>
        </div>

        {/* Feature 11: Order Summary */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method & Total */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <div className='payment__priceContainer'>
              <h3>Order Total: {formatCurrency(getBasketTotal(basket))}</h3>
              <button disabled={processing} onClick={handleBuyNow} className="payment__buyButton">
                {processing ? <p>Processing...</p> : "Buy Now"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;
