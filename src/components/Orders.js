import React from 'react';
import './Orders.css';
import { useStateValue } from "../StateProvider";

function Orders() {
  const [{ user }] = useStateValue();

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {user ? (
          <p>Thank you, {user.email}! Your order has been placed successfully and will be shipped soon.</p>
        ) : (
          <p>Thank you for your order! Please sign in to save your order history.</p>
        )}
        <p className="orders__id">Order #123456789</p>
      </div>
    </div>
  )
}

export default Orders;
