import React from "react";
import "./Subtotal.css";
import { formatCurrency } from "../utils/formatCurrency";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
