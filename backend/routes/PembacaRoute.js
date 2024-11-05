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