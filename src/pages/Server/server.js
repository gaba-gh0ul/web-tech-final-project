const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'final_project'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API Endpoint Example: Fetch Users
app.get('/api', (req, res) => {
  db.query('SELECT * FROM order_list', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// API Endpoint Example: Add a New User
app.post('/api', (req, res) => {
  const { name, email, number, cartItems } = req.body;
  let allCartItemNames = '' ; 

  cartItems.forEach(item => {
    allCartItemNames += item.name + ' ' ; 
  });

  console.log(name, email, number, allCartItemNames);

  db.query('INSERT INTO order_list (name, email, phone, menu) VALUES (?, ?, ?, ?)', 
    [name, email, number, allCartItemNames], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id: results.insertId, name, email, number, allCartItemNames });
    }
  });
});

const PORT = 5170;
app.listen(PORT, () => {
  console.log(`Open on ${PORT}`);
});