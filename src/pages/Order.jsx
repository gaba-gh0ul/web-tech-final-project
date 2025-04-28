// src/pages/Order.jsx
import React, { useState } from "react";
import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";
import "../styles/Order.css";

const Order = () => {
  const { addToCart } = useCart();
  const [customIngredients, setCustomIngredients] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleIngredientChange = (id, value) => {
    setCustomIngredients({ ...customIngredients, [id]: value });
  };

  const filteredMenu = menuData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="order-container">
      <h2 className="order-heading">Place Your Order</h2>
      <input
        type="text"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="order-search"
      />
      <div className="order-items">
        {filteredMenu.map((item) => (
          <div key={item.id} className="order-item">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <input
              type="text"
              placeholder="Customize ingredients..."
              value={customIngredients[item.id] || ""}
              onChange={(e) => handleIngredientChange(item.id, e.target.value)}
              className="ingredient-input"
            />
            <button
              onClick={() =>
                addToCart({ ...item, custom: customIngredients[item.id] || "" })
              }
              className="add-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
