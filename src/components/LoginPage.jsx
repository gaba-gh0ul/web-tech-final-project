// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
//import '../styles/LoginPage.css'; // optional: create this for styling

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const [phone, setPhone] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}`);
    // Add authentication logic here
  };

  const handleSendCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    setGeneratedCode(code);
    alert(`Reset code sent via SMS to ${phone}: ${code}`);
  };

  const handleVerifyCode = () => {
    if (resetCode === generatedCode) {
      alert("Code verified! You can now reset your password.");
      // Redirect to reset password page or open reset form
    } else {
      alert("Invalid code. Please try again.");
    }
  };

  return (
    /*<div className="login-container">
      <h2>Login</h2>

      {!isResetting ? (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#">Register</a></p>
    </div>*/
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default LoginPage;
