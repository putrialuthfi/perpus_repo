import express from 'express';
import { getProfileReaders, 
    getProfileReaderById, 
    createProfileReader, 
    updateProfileReader, 
    deleteProfileReader, 
} from '../controllers/ProfileReadersController.js';

const router = express.Router();

router.get('/profilereaders', getProfileReaders);
router.get('/profilereaders/:id', getProfileReaderById);
router.post('/profilereaders', createProfileReader);
router.put('/profilereaders/:id', updateProfileReader);
router.delete('/profilereaders/:id', deleteProfileReader);

export default router;