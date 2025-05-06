// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/menu" className="nav-button">
          Menu
        </Link>
        <Link to="/order" className="nav-button">
          Order
        </Link>
        <Link to="/cart" className="nav-button">
          Cart
        </Link>
        <Link to="/checkout" className="nav-button">
          Checkout
        </Link>
        <Link to="/trackorder" className="nav-button">
          Track Order
        </Link>
        <Link to="/login" className="nav-button">
          Admin Dashboard
        </Link>
      </div>

      {/* Keeps the nav buttons centered */}
      <div></div>
    </nav>
  );
};

export default Navbar;
