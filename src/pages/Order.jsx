// src/pages/Order.jsx
import React, { useState } from "react";
import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";
import "../styles/Order.css";

const Order = () => {
  const { addToCart } = useCart();
  const [customIngredients, setCustomIngredients] = useState({});

  const handleIngredientChange = (id, value) => {
    setCustomIngredients({ ...customIngredients, [id]: value });
  };

  return (
    <div className="order-container">
      <h2>Place Your Order</h2>
      {menuData.map((item) => (
        <div key={item.id} className="order-item">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          <input
            type="text"
            placeholder="Customize ingredients..."
            value={customIngredients[item.id] || ""}
            onChange={(e) => handleIngredientChange(item.id, e.target.value)}
          />
          <button
            onClick={() =>
              addToCart({ ...item, custom: customIngredients[item.id] || "" })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Order;
