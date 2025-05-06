// src/pages/TrackOrder.jsx
import React, { useState } from "react";
import axios from 'axios';
import "../styles/TrackOrder.css";

const TrackOrder = () => {
  const [ordernumber, setOrdernumber] = useState("");
  const [status, setStatus] = useState(null);


    const handleTrack = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5170/api/check',{ ordernumber })
        .then(response => {
          alert('Order Is Ready') ; 
        })
        .catch(error => {
          alert('Preparing Order');
        });
    };

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        value={ordernumber}
        onChange={(e) => setOrdernumber(e.target.value)}
        className="tracking-input"
      />
      <button onClick={handleTrack} className="track-button">Track</button>

      {status === "cooking" && <p className="status">Status: Cooking...</p>}
      {status === "ready" && <p className="status">Status: Ready for Pickup!</p>}
    </div>
  );
};

export default TrackOrder;
