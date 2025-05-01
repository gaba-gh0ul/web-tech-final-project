// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Greko Taco. All rights reserved.</p>
      <p className="footer-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
        <a href="mailto:info@grekotaco.com"> Email Us</a>
      </p>
    </footer>
  );
};

export default Footer;
