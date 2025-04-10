import React from "react";
import menu1 from "../assets/Menu 1.jpg";
import menu2 from "../assets/Menu 2.jpg";

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <img
        src={menu1}
        alt="Menu 1"
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <img src={menu2} alt="Menu 2" style={{ width: "100" }} />
    </div>
  );
};

export default Menu;
