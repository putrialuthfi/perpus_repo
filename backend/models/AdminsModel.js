import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Admins = db.define('profil_admins', {
    nama_lengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ttl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('Laki-Laki', 'Perempuan'),
        allowNull: false,
    },
    no_hp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Admins;

(async()=>{
    await db.sync();
})();





// DISINI
// import db from '../config/database.js'; // Menggunakan import untuk ES Module

// // Fungsi untuk mengambil data admin dari database
// const getAdmins = async () => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT nama, deskripsi FROM admins'; // Sesuaikan query SQL dengan database-mu
//     db.query(query, (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

// // Menggunakan export named export untuk ES Module
// export { getAdmins };
