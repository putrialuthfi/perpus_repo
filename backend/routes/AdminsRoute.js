import express from 'express';
import { getAdmins, 
    getAdminsById, 
    createAdmins, 
    updateAdmins, 
    deleteAdmins, 
} from '../controllers/AdminsController.js';
// import { getAdmins, 
//     getAdminsById, 
//     createAdmins, 
//     updateAdmins, 
//     deleteAdmins, 
//     getDataFromDatabase,
// } from '../controllers/AdminsController.js';


const router = express.Router();
// const { getDataFromDatabase } = require('../controllers/AdminsController.js')

router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminsById);
router.post('/admins', createAdmins);
router.put('/admins/:id', updateAdmins);
router.delete('/admins/:id', deleteAdmins);
// router.get('/data', getDataFromDatabase);

export default router;



// const express = require('express');
// const { fetchAdmins } = require('../controllers/AdminsController');
// import express from 'express';
// import { fetchAdmins } from '../controllers/AdminsController.js';
// const router = express.Router();

// // Route untuk mendapatkan data admin
// router.get('/tesadmin/data', fetchAdmins);

// // module.exports = router;
// export default router;