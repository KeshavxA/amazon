import React from "react";
import "./Subtotal.css";
import { formatCurrency } from "../utils/formatCurrency";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleCheckout = () => {
    if (basket.length === 0) {
      toast.warn("Your cart is empty! Please add items to checkout.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} {basket.length === 1 ? 'item' : 'items'}):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
