const mysql = require('mysql');

// konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_siperpus',
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;




// import { Sequelize } from "sequelize";

// const db = new Sequelize ('db_siperpus','root','',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

// export default db;