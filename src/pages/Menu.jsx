// src/pages/Menu.jsx
import React from "react";
import "../styles/Menu.css";
import menu1 from "../assets/Menu 1.jpg";
import menu2 from "../assets/Menu 2.jpg";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-images">
        <img src={menu1} alt="Menu 1" className="menu-img" />
        <img src={menu2} alt="Menu 2" className="menu-img" />
      </div>
    </div>
  );
};

export default Menu;
