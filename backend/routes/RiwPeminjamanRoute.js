import express from 'express';
import { getRiwPeminjaman, 
    getRiwPeminjamanById, 
    createRiwPeminjaman, 
    updateRiwPeminjaman, 
    deleteRiwPeminjaman, 
} from '../controllers/RiwPeminjamanController.js';

const router = express.Router();

router.get('/riwpeminjaman', getRiwPeminjaman);
router.get('/riwpeminjaman/:id', getRiwPeminjamanById);
router.post('/riwpeminjaman', createRiwPeminjaman);
router.put('/riwpeminjaman/:id', updateRiwPeminjaman);
router.delete('/riwpeminjaman/:id', deleteRiwPeminjaman);

export default router;