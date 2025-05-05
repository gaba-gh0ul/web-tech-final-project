import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

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
    <div className="login-container">
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p>
            Forgot password?{" "}
            <span className="link-like" onClick={() => setIsResetting(true)}>
              Click here
            </span>
          </p>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      ) : (
        <div className="reset-section">
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button onClick={handleSendCode}>Send Reset Code via SMS</button>

          <input
            type="text"
            placeholder="Enter received code"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          />
          <button onClick={handleVerifyCode}>Verify Code</button>

          <p>
            <span className="link-like" onClick={() => setIsResetting(false)}>
              Back to login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
