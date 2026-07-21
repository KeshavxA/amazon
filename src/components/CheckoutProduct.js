import React from 'react';
import './CheckoutProduct.css';
import { formatCurrency } from '../utils/formatCurrency';

function CheckoutProduct({ id, image, title, price, rating }) {
  const removeFromBasket = () => {
    // will be implemented in feature 3
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt={title} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduct__price">
          <strong>{formatCurrency(price)}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
