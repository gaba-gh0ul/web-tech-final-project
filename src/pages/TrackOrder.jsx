// src/pages/TrackOrder.jsx
import React, { useState } from "react";
import "../styles/TrackOrder.css";

const TrackOrder = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    if (trackingCode.startsWith("GRK")) {
      setStatus("cooking");
      setTimeout(() => setStatus("ready"), 4000); // Simulate progress
    } else {
      alert("Invalid tracking number.");
    }
  };

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        value={trackingCode}
        onChange={(e) => setTrackingCode(e.target.value)}
        className="tracking-input"
      />
      <button onClick={handleTrack} className="track-button">Track</button>

      {status === "cooking" && <p className="status">Status: Cooking...</p>}
      {status === "ready" && <p className="status">Status: Ready for Pickup!</p>}
    </div>
  );
};

export default TrackOrder;
