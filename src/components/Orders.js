import React from 'react';
import './Orders.css';
import { useStateValue } from "../StateProvider";
import { Link } from 'react-router-dom';

function Orders() {
  const [{ user }] = useStateValue();

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {user ? (
          <p>Thank you, {user.email.split('@')[0]}! Your order has been placed successfully and will be shipped soon.</p>
        ) : (
          <p>Thank you for your order! Please sign in to save your order history.</p>
        )}
        <p className="orders__id">Order #123456789</p>
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className='orders__continueButton'>Continue Shopping</button>
      </Link>
    </div>
  )
}

export default Orders;
