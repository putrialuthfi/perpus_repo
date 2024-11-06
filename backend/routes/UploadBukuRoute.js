import express from 'express';
import { getUploadBuku, 
    getUploadBukuById, 
    createUploadBuku, 
    updateUploadBuku, 
    deleteUploadBuku, 
} from '../controllers/UploadBukuController.js';

const router = express.Router();

router.get('/uploadbuku', getUploadBuku);
router.get('/uploadbuku/:id', getUploadBukuById);
router.post('/uploadbuku', createUploadBuku);
router.put('/uploadbuku/:id', updateUploadBuku);
router.delete('/uploadbuku/:id', deleteUploadBuku);

export default router;