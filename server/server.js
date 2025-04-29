// server/server.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // your password
  database: "restaurant_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.get("/api/menu", (req, res) => {
  db.query("SELECT * FROM menu", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
