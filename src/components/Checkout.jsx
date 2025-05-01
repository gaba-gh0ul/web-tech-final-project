// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [customText, setCustomText] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const randomTracking = "GRK" + Math.floor(100000 + Math.random() * 900000);
    setTrackingNumber(randomTracking);
    setOrderPlaced(true);

    // Save tracking number in localStorage to access it in /trackorder
    localStorage.setItem("trackingNumber", randomTracking);
  };

  const handleEdit = (index, currentCustom) => {
    setEditingIndex(index);
    setCustomText(currentCustom || "");
  };

  const handleSaveEdit = (index) => {
    cartItems[index].custom = customText;
    setEditingIndex(null);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {!orderPlaced && cartItems.length === 0 && <p>Your cart is empty.</p>}

      {!orderPlaced &&
        cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <p>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
            </p>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="customization-input"
                />
                <button className="small-btn" onClick={() => handleSaveEdit(index)}>
                  Save
                </button>
              </div>
            ) : (
              item.custom && <p>Custom: {item.custom}</p>
            )}
            <div className="item-actions">
              <button className="small-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
              {editingIndex !== index && (
                <button className="small-btn" onClick={() => handleEdit(index, item.custom)}>
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}

      {!orderPlaced && cartItems.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}

      {orderPlaced && (
        <div className="confirmation">
          <h3>Thank you! Your order has been placed.</h3>
          <p>
            Tracking Number: <strong>{trackingNumber}</strong>
          </p>
          <button className="checkout-button" onClick={() => navigate("/trackorder")}>
            Track Your Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
