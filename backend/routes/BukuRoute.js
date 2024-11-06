import express from 'express';
import { getBuku, 
    getBukuById, 
    createBuku, 
    updateBuku, 
    deleteBuku, 
} from '../controllers/BukuController.js';

const router = express.Router();

router.get('/buku', getBuku);
router.get('/buku/:id', getBukuById);
router.post('/buku', createBuku);
router.put('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

export default router;