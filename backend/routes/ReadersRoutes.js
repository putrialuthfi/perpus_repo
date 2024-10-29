import express from 'express';
import { getReaders, getReaderById, createReader, updateReader, deleteReader } from '../controllers/ReadersController.js';

const router = express.Router();

router.get('/readers', getReaders);
router.get('/readers/:id', getReaderById);
router.post('/readers', createReader);
router.put('/readers/:id', updateReader);
router.delete('/readers/:id', deleteReader);

export default router;
