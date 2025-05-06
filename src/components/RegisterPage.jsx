import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5170/add', { username, password })
    .then(response => {
      setUsername('');
      setPassword('');
    })
    .catch(error => {
      console.error('There was an error adding the user!', error);
    });
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default RegisterPage;
