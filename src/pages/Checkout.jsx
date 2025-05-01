// src/pages/Checkout.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from "../context/CartContext";
import axios from 'axios';
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleAddUser = () => {
    axios.post('http://localhost:5170/api', { name, email, number, cartItems })
      .then(response => {
        setOrders([...orders, response.data]);
        setName('');
        setEmail('');
        setNumber('') ; 
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <p>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
            </p>
            {item.custom && <p>Custom: {item.custom}</p>}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="phonenumber"
        placeholder="Phone"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      
      <button onClick={handleAddUser}>Submit Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;

