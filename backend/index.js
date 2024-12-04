import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
// import router from "./routes/PembacaRoute.js";
import router from "./routes/ReaderRoute.js";
// import PembacaRoute from "./routes/PembacaRoute.js";
import ReaderRoute from "./routes/ReaderRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import PeminjamRoute from "./routes/PeminjamRoute.js"
import UploadBukuRoute from "./routes/UploadBukuRoute.js"
import RiwPeminjamanRoute from "./routes/RiwPeminjamanRoute.js";
import AktivitasRoute from "./routes/AktivitasRoute.js"
import BukuRoute from "./routes/BukuRoute.js"

dotenv.config();


const app = express();
app.use(cors({ credentials: true, origin:'http://localhost:5000' }))
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(router);
// app.use('/', PembacaRoute);
app.use('/', ReaderRoute);
app.use('/', AdminRoute);
app.use('/', PeminjamRoute);
app.use('/', UploadBukuRoute);
app.use('/', RiwPeminjamanRoute);
app.use('/', AktivitasRoute);
app.use('/', BukuRoute);
// app.use('tesadmin', AdminsRoute);

// CREATE CONNECTION DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "salinan_db_siperpus"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

// Untuk menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});