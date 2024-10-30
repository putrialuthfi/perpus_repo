import express from 'express';
import { getProfileAdmins, 
    getProfileAdminsById, 
    createProfileAdmins, 
    updateProfileAdmins, 
    deleteProfileAdmins, 
} from '../controllers/ProfileAdminsController.js';

const router = express.Router();

router.get('/profileadmins', getProfileAdmins);
router.get('/profileadmins/:id', getProfileAdminsById);
router.post('/profileadmins', createProfileAdmins);
router.put('/profileadmins/:id', updateProfileAdmins);
router.delete('/profileadmins/:id', deleteProfileAdmins);

export default router;