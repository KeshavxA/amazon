import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET"
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          {basket?.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Empty Cart" style={{ width: '300px', marginBottom: '20px' }} />
              <h2 className="checkout__title">Your Amazon Cart is empty</h2>
              <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="checkout__title">Your shopping Basket</h2>
                <button onClick={emptyBasket} style={{ background: '#f0c14b', border: '1px solid', padding: '4px 8px', cursor: 'pointer' }}>
                  Clear Basket
                </button>
              </div>
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
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
