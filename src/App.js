import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import RegisterPage from './components/RegisterPage';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <CartProvider>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} />
          <div style={{ marginLeft: "220px", padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/trackorder" element={<TrackOrder />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;

