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

  const finishOrder = (orderId) => {
    axios.post('http://localhost:5170/api/update', { id: orderId })
      .then(response => {
        alert("Order Complete");
      })
      .catch(error => {
        console.error('There was an error updating the order!', error);
      });
  };

  return (
    <div className="order_container">
    {orders.map((order,i) => (
      <>
        <div key = {i} className='order_div'>
        
          <p><b>ORDER NUMBER:</b> {order.id}</p>
          <p><b>NAME:</b> {order.name}</p>
          <p><b>EMAIL:</b> {order.email}</p>
          <p><b>PHONE NUMBER:</b> {order.phone}</p>      
          <p><b>ORDER:</b> {order.menu}</p>
          <p><b>PRICE:</b> ${order.price}</p>
          <p><b>Complete?</b> {order.ISDONE}</p>
          <button onClick={() => finishOrder(order.id)}>Complete Order</button>
          <br/>
          <br/>

        </div>
      </>
      ))}
    <div className="home-buttons">

      <Link to="/register" className="home-button">Add User</Link>
      <Link to="/addtomenu"className="home-button">Edit Menu</Link>
      </div>
      <br/>
      
      </div>
  );
};

export default Users;