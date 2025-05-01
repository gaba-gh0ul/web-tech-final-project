import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          <p>ORDER NUMBER:{order.ID}</p>
          <p>NAME:{order.Name}</p>
          <p>EMAIL:{order.Email}</p>
          <p>PHONE NUMBER:{order.Phone}</p>      
          <p>ORDER:</p>
        </div>
      </>
      ))}


    </div>
  );
};

export default Users;