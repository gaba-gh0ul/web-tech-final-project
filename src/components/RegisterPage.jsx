import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css'; 

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5170/add', { username, password })
    .then(response => {
      alert("User Added")
      setUsername('');
      setPassword('');
    })
    .catch(error => {
      console.error('There was an error adding the user!', error);
    });
  };

  return (
    <div className="register-container">
      <h2>Add User</h2>
    <form onSubmit={handleSubmit} className='register-form '>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
         value={password}
         onChange={e => setPassword(e.target.value)}
          required
      />
      <br/>
      <br/>

      <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default RegisterPage;

