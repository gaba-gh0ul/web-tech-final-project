// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [customText, setCustomText] = useState("");
  const [sauceText, setSauceText] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const randomTracking = "GRK" + Math.floor(100000 + Math.random() * 900000);
    setTrackingNumber(randomTracking);
    setOrderPlaced(true);
    clearCart();
  };

  const handleEdit = (index, currentCustom, currentSauce) => {
    setEditingIndex(index);
    setCustomText(currentCustom || "");
    setSauceText(currentSauce || "");
  };

  const handleSaveEdit = (index) => {
    cartItems[index].custom = customText;
    cartItems[index].sauce = sauceText;
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

            {/* Editing mode */}
            {editingIndex === index ? (
              <div>
                <label>Customization:</label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="customization-input"
                />

                {/* Sauce dropdown (optional) */}
                <label style={{ marginTop: "8px" }}>Sauce (for wings):</label>
                <select
                  value={sauceText}
                  onChange={(e) => setSauceText(e.target.value)}
                  className="customization-input"
                >
                  <option value="">Select Sauce</option>
                  <option value="Mango Habanero">Mango Habanero</option>
                  <option value="Barbecue">Barbecue</option>
                  <option value="Buffalo">Buffalo</option>
                  <option value="Garlic">Garlic</option>
                  <option value="Plain">Plain</option>
                </select>

                <button
                  className="small-btn"
                  onClick={() => handleSaveEdit(index)}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                {item.custom && <p>Customization: {item.custom}</p>}
                {item.sauce && <p>Sauce: {item.sauce}</p>}
              </>
            )}

            <div className="item-actions">
              <button
                className="small-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
              {editingIndex !== index && (
                <button
                  className="small-btn"
                  onClick={() => handleEdit(index, item.custom, item.sauce)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}

      {/* Total and Place Order */}
      {!orderPlaced && cartItems.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handlePlaceOrder}>
            Pay in store
          </button>
        </>
      )}

      {/* Confirmation */}
      {orderPlaced && (
        <div className="confirmation">
          <h3>Thank you! Your order has been placed.</h3>
          <p>
            Tracking Number: <strong>{trackingNumber}</strong>
          </p>
          <button
            className="track-button"
            onClick={() =>
              navigate("/trackorder", { state: { trackingNumber } })
            }
          >
            Track Your Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
