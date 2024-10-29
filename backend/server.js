import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import Readers from "./models/ReadersModel.js";
import Admins from "./models/AdminsModel.js";

// MVP
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(Readers);
app.use(Admins);


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
      const readers = await Reader.findAll();
      res.json(readers);
    } catch (error) {
      console.error('Error fetching readers:', error);
      res.status(500).json({ error: error.message });
    }
  });


// app.post('/readers', (req, res) => {
//     const { email, password, confirm } = req.body;
//     if (!email || !password || !confirm) {
//         return res.status(400).json({ message: "All fields are required" });
//     }
//     const sql = "INSERT INTO readers (email, password, confirm) VALUES (?, ?, ?)";
//     const values = [email, password, confirm];
//     db.query(sql, values, (err, result) => {
//         if (err) {
//             console.error('Error executing query: ' + err.stack);
//             return res.status(500).json({ message: "Database error" });
//         }
//         console.log("New user added: ", result.insertId);
//         return res.status(201).json({ message: "User added successfully", userId: result.insertId });
//     });
// });



// Blm diedit
// app.post('/login', (req, res) => {
//     const sql = "SELECT email, password FROM users WHERE email = ? AND password = ?";
//     const values = [
//         req.body.email,
//         req.body.password
//     ];
//     db.query(sql, values, (err, data) => {
//         if (err) return res.status(500).json({ message: "Database error" });
//         if (data.length > 0) {
//             const user = data[0]; // Assuming there's only one user (unique email constraint)
//             // Send user information along with success message
//             return res.status(200).json({
//                 message: "Login Successfully!",
//                 user: {
//                     email: user.email
//                 }
//             });
//         } else {
//             return res.status(401).json({ message: "Invalid email or password" });
//         }
//     });
// });

// // Untuk menjalankan server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });