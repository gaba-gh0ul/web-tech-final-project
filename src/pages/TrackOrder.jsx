import React from 'react';
//import '../styles/TrackOrder.css';

function TrackOrder() {
  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <input type="text" placeholder="Enter Order ID" />
      <button>Track</button>
      <div className="order-status">
        <p>Status: Preparing</p>
        <p>Estimated Time: 20 mins</p>
      </div>
    </div>
  );
}

export default TrackOrder;
