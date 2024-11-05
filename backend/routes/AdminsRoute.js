import express from 'express';
import { getAdmins, 
    getAdminsById, 
    createAdmins, 
    updateAdmins, 
    deleteAdmins, 
} from '../controllers/AdminsController.js';

const router = express.Router();

router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminsById);
router.post('/admins', createAdmins);
router.put('/admins/:id', updateAdmins);
router.delete('/admins/:id', deleteAdmins);

export default router;