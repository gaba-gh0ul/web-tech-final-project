import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5170/api')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  };

  return (
    <div className="order_container">
    {orders.map((order,i) => (
      <>
        <div key = {i} className='order_div'>
          <p>ORDER NUMBER: {order.id}</p>
          <p>NAME: {order.name}</p>
          <p>EMAIL: {order.email}</p>
          <p>PHONE NUMBER: {order.phone}</p>      
          <p>ORDER: {order.menu}</p>
          <p>PRICE: ${order.price}</p>

        </div>
      </>
      ))}

    <Link to="/register" className="register-button">Add User</Link>
    </div>
  );
};

export default Users;