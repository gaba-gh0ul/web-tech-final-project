import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
    </div>
  );
};

export default Navbar;
