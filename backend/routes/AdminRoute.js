import express from 'express';
import { getAdmin, 
    getAdminById, 
    createAdmin, 
    updateAdmin, 
    deleteAdmin, 
} from '../controllers/AdminController.js';
// import { getAdmin, 
//     getAdminById, 
//     createAdmin, 
//     updateAdmin, 
//     deleteAdmin, 
//     getDataFromDatabase,
// } from '../controllers/AdminController.js';


const router = express.Router();
// const { getDataFromDatabase } = require('../controllers/AdminController.js')

router.get('/admin', getAdmin);
router.get('/admin/:id', getAdminById);
router.post('/admin', createAdmin);
router.put('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);
// router.get('/data', getDataFromDatabase);

export default router;



// const express = require('express');
// const { fetchAdmin } = require('../controllers/AdminController');
// import express from 'express';
// import { fetchAdmin } from '../controllers/AdminController.js';
// const router = express.Router();

// // Route untuk mendapatkan data admin
// router.get('/tesadmin/data', fetchAdmin);

// // module.exports = router;
// export default router;