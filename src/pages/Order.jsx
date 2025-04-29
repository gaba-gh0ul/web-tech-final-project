// src/pages/Order.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Order.css";
import axios from "axios";

const Order = () => {
  const { addToCart } = useCart();
  const [menuData, setMenuData] = useState([]); // fetch menu dynamically
  const [customIngredients, setCustomIngredients] = useState({});

  useEffect(() => {
    // Fetch menu items from backend
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/menu");
        setMenuData(res.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  const handleIngredientChange = (id, value) => {
    setCustomIngredients({ ...customIngredients, [id]: value });
  };

  return (
    <div className="order-container">
      <h2>Place Your Order</h2>
      {menuData.map((item) => (
        <div key={item.id} className="order-item">
          <h4>{item.name}</h4>
          <p>{item.description || "No description available."}</p>
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
