import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css'; 
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
        navigate('/admindashboard') ; 
      })
      .catch(error => {
        alert('Access Denied');
      });
  };
        
  return (
    <div className="register-container">
    <h2>Log In</h2>
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

    <button type="submit">Login</button>
    </form>
  </div>
  );
}
        
export default LoginForm;
            
        