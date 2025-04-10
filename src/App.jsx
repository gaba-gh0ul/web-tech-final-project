import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import "./App.css"; // Optional: global styles

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Ensure CartProvider is wrapping the entire app */}
      <div
        style={{
          display: "flex",
          backgroundColor: "yellow",
          minHeight: "100vh",
        }}
      >
        <Router>
          <Navbar /> {/* Navbar needs access to the cart context */}
          <div style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
