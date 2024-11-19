import express from 'express';
import { getPembaca, 
    getPembacaById, 
    createPembaca, 
    updatePembaca, 
    deletePembaca, 
} from '../controllers/PembacaController.js';

const router = express.Router();

router.get('/pembaca', getPembaca);
router.get('/pembaca/:id', getPembacaById);
router.post('/pembaca', createPembaca);
router.put('/pembaca/:id', updatePembaca);
router.delete('/pembaca/:id', deletePembaca);

export default router;

// Yang ke 2
// import express from 'express';
// // pembacaRoutes.js


// const router = express.Router();
// const db = require('../index.js'); // Sesuaikan path ke koneksi database Anda


// // Route untuk menyimpan data pembaca
// router.post("/pembaca", (req, res) => {
//     const { nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email } = req.body;

//     const sql = "INSERT INTO pembaca (nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email) VALUES (?, ?, ?, ?, ?, ?)";
//     db.query(sql, [nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email], (err, result) => {
//         if (err) {
//             console.error("Error inserting data:", err);
//             res.status(500).json({ message: "Gagal menyimpan data" });
//             return;
//         }
//         res.status(200).json({ message: "Data berhasil disimpan" });
//     });
// });

// module.exports = router;