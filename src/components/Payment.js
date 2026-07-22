import React from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();

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
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Feature 11: Order Summary */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {/* Items will render here in feature 11 */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;
