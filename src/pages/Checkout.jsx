// src/pages/Checkout.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <p>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
            </p>
            {item.custom && <p>Custom: {item.custom}</p>}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-button">Place Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
