import express from 'express';
import { getAktivitas, 
    getAktivitasById, 
    createAktivitas, 
    updateAktivitas, 
    deleteAktivitas, 
} from '../controllers/AktivitasController.js';

const router = express.Router();

router.get('/aktivitas', getAktivitas);
router.get('/aktivitas/:id', getAktivitasById);
router.post('/aktivitas', createAktivitas);
router.put('/aktivitas/:id', updateAktivitas);
router.delete('/aktivitas/:id', deleteAktivitas);

export default router;