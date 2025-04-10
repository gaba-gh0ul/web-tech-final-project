import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div style={{
      marginLeft: '160px',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
