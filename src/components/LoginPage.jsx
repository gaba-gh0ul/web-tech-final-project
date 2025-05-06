import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
        
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
        
  const handleSubmit = (e) => {
    e.preventDefault();

    const hasedpassword  = bcrypt.hashSync(password, 10) ; 
    console.log(hasedpassword) ; 
    axios.post('http://localhost:5170/login',{ username, password })
      .then(response => {
        console.log(response.password) ; 
        navigate('/admindashboard') ; 
      })
      .catch(error => {
        alert('Access Denied');
      });
  };
        
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '50px auto' }}>
        <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
        <button type="submit">Login </button>
      </form>
  );
}
        
export default LoginForm;
            
        