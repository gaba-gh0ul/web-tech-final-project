// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // We'll create nice styles here too
import logo from '../assets/logo.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo */}
      <img src={logo} alt="Greko Taco Logo" className="home-logo" />

      {/* Welcome Text */}
      <h1 className="home-title">Welcome to Greko Taco</h1>
      <p className="home-subtitle">Delicious Greek and Mexican Grill Fusion</p>

      {/* Address and Contact */}
      <div className="home-contact">
        <p><strong>Address:</strong> 6177 Epps Mill Rd C, Christiana, TN 37037</p>
        <p><strong>Phone:</strong> (615) 962-8818</p>
        <p><strong>Hours:</strong> Monday–Sunday: 10AM–9PM</p>
      </div>

      {/* Action Buttons */}
      <div className="home-buttons">
        <Link to="/menu" className="home-button">View Menu</Link>
        <Link to="/order" className="home-button">Order Now</Link>
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
      </div>
    </div>
  );
};

export default Home;
