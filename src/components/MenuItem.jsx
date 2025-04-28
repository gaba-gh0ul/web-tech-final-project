import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/MenuItem.css";

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-item">
      <img
        src={item.image}
        alt={item.name}
        className="menu-item-image"
        loading="lazy"
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
