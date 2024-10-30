import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import ProfileReaders from "./models/ProfileReadersModel.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

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
app.get('/profilereaders', async (req, res) => {
    try {
      const profilereaders = await ProfileReaders.findAll();
      res.json(profilereaders);
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