import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import ProfileReaders from "./models/ProfileReadersModel.js";
import "./routes/ProfileReadersRoute.js";
import ProfileReadersRoute from "./routes/ProfileReadersRoute.js";

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

// Endpoint untuk get data pembaca/readers
// app.get('/profilereaders', async (req, res) => {
//     try {
//       const profilereaders = await ProfileReaders.findAll();
//       res.json(profilereaders);
//     } catch (error) {
//       console.error('Error fetching profilereaders:', error);
//       res.status(500).json({ error: error.message });
//     }
//   });

// Endpoint untuk post data pembaca/readers
// app.post('/profilereaders', (req, res) => {
//   const { email, password, confirm } = req.body;
//   if (!email || !password || !confirm) {
//       return res.status(400).json({ message: "All fields are required" });
//   }
//   const sql = "INSERT INTO users (email, password, confirm) VALUES (?, ?, ?)";
//   const values = [email, password, confirm];
//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error executing query: ' + err.stack);
//           return res.status(500).json({ message: "Database error" });
//       }
//       console.log("New user added: ", result.insertId);
//       return res.status(201).json({ message: "User added successfully", userId: result.insertId });
//   });
// });


// Untuk menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});