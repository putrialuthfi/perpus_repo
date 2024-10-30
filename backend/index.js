import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import Readers from "./models/ReadersModel.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use(Readers);
// app.use(Admins);

// CREATE CONNECTION DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_siperpus"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

// Endpoint untuk post data pembaca/readers
app.get('/readers', async (req, res) => {
    try {
      const readers = await Readers.findAll();
      res.json(readers);
    } catch (error) {
      console.error('Error fetching readers:', error);
      res.status(500).json({ error: error.message });
    }
  });


// Untuk menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});