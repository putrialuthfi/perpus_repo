import express from 'express';
import { getPeminjam, 
    getPeminjamById, 
    createPeminjam, 
    updatePeminjam, 
    deletePeminjam, 
} from '../controllers/PeminjamController.js';

const router = express.Router();

router.get('/peminjam', getPeminjam);
router.get('/peminjam/:id', getPeminjamById);
router.post('/peminjam', createPeminjam);
router.put('/peminjam/:id', updatePeminjam);
router.delete('/peminjam/:id', deletePeminjam);

export default router;