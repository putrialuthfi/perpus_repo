import express from 'express';
import { getProfileReaders, 
    getProfileReadersById, 
    createProfileReaders, 
    updateProfileReaders, 
    deleteProfileReaders, 
} from '../controllers/ProfileReadersController.js';

const router = express.Router();

router.get('/profilereaders', getProfileReaders);
router.get('/profilereaders/:id', getProfileReadersById);
router.post('/profilereaders', createProfileReaders);
router.put('/profilereaders/:id', updateProfileReaders);
router.delete('/profilereaders/:id', deleteProfileReaders);

export default router;