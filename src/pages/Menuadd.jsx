import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css'; 

const MenuPage = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5170/menu', { category, name, description, price })
    .then(response => {
      alert("New Item Added to the Menu")
      setCategory('');
      setName('');
      setDescription('');
      setPrice('');
    })
    .catch(error => {
      console.error('There was an error adding the user!', error);
    });
  };

  const handleDeletion = () => {
    axios.post('http://localhost:5170/menu/deletion', {name})
      .then(response => {
        alert("Item Deleted From the Menu")
        setCategory('');
        setName('');
        setDescription('');
        setPrice('');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
  };

  return (
    <div className="register-container">
      <h2>Add New Item to the Menu</h2>
    <form onSubmit={handleSubmit} className='register-form '>

        <input
          type="text"
          placeholder="Item Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <p className='categories'>Item Category : A for Entree, B for Salad, C for Kids meal, D for Wings, E for Side, f for Drink</p>
        <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Item Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
        />
      <br/>
      <br/>

      <button type="submit">Add Item</button>
      <button onClick={handleDeletion}>Delete Item</button>

      </form>
    </div>
  );
};

export default MenuPage;

