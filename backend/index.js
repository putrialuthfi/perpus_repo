import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
// import PembacaRoute from "./routes/PembacaRoute.js";
import AdminsRoute from "./routes/AdminsRoute.js";
import PeminjamRoute from "./routes/PeminjamRoute.js"
import UploadBukuRoute from "./routes/UploadBukuRoute.js"
import RiwPeminjamanRoute from "./routes/RiwPeminjamanRoute.js";
import AktivitasRoute from "./routes/AktivitasRoute.js"


// const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use('/', PembacaRoute);
app.use('/', AdminsRoute);
app.use('/', PeminjamRoute);
app.use('/', UploadBukuRoute);
app.use('/', RiwPeminjamanRoute);
app.use('/', AktivitasRoute);

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

// Untuk menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});