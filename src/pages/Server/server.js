const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs") ;
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

//adds new order 
app.post('/api', (req, res) => {
  const { name, email, number, cartItems, total } = req.body;
  let allCartItemNames = '' ; 
  console.log(req.body)  ;
  cartItems.forEach(item => {
    allCartItemNames += item.name + ' [' + item.custom + '] ' ; 
  });
  db.query('INSERT INTO order_list (name, email, phone, menu, price, isdone) VALUES (?, ?, ?, ?, ?, ?)', 
    [name, email, number, allCartItemNames, total, "N"], (err, results) => {
    if (err) {
    console.log("not added")  ;
      res.status(500).send(err);
    } 
    else {
      console.log("added")  ;
      res.json({ id: results.insertId, ...results });
    }
  });
});


app.post('/api/check', (req, res) => {
  console.log(req.body) ; 
  const { ordernumber } = req.body;
  db.query('SELECT * FROM order_list WHERE id = ? AND isdone = ?', 
    [ordernumber,"Y"], (err, results) => {
    console.log(results) ;
    if (results.length === 0){
      res.status(401).send(err) ; 
    }
    else {
      res.json(results); 
    }
  });
});

app.post('/api/update', (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  
  db.query('UPDATE order_list SET isdone = ? WHERE id = ?',
    ["Y", id], (err, results) => {
      console.log(results);
      
      if (err) {
        res.status(401).send(err);
      }
      else {
        res.json(results);
      }
    });
});

app.post('/login', (req, res) => {
  console.log(req.body) ; 
  const { username, password} = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', 
    [username, password], (err, results) => {
  console.log(results) ; 
 if (results.length === 0){
      res.status(401).send(err) ; 
    }
    else {
      res.json(results);
    }
  });
});

//adds a new user 
app.post('/add', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password ) VALUES (?, ?)', 
    [username, password], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id: results.insertId, username, password});
    }
  });
});

app.get('/menu', (req, res) => {
  db.query('SELECT * FROM menu ORDER BY category', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});


app.post('/menu', (req, res) => {
  const { category, name, description, price } = req.body;
  db.query('INSERT INTO menu (category, name, description, price) VALUES (?, ?, ?, ?)', 
    [category, name, description, price], (err, results) => {
    if (err) {
    console.log("not added")  ;

      res.status(500).send(err);
    } else {
    console.log("added")  ;
      res.json(results);
    }
  });
});

app.post('/menu/deletion', (req, res) => {
  const { category, name, description, price } = req.body;
  db.query('DELETE FROM menu WHERE name = ?', 
    [name], (err, results) => {
    if (err) {
    console.log("not deleted")  ;
      res.status(500).send(err);
    } else {
    console.log("deleted")  ;
      res.json(results);
    }
  });
});


const PORT = 5170;
app.listen(PORT, () => {
  console.log(`Open on ${PORT}`);
});