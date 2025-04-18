import React from "react";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div
      style={{
        marginLeft: "160px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <img
        src={logo}
        alt="Greko Taco Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h1>Welcome to Greko Taco</h1>
      <p>
        <strong>Address:</strong> 6177 Epps Mill Rd C, Christiana, TN 37037
      </p>
      <p>
        <strong>Phone:</strong> (615) 962-8818
      </p>
      <p>
        <strong>Hours:</strong>
      </p>
      <p>Monday–Sunday: 10 AM–9 PM</p>
    </div>
  );
};

export default Home;
