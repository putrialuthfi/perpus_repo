import express from "express";
import { getReaders, RegisterReaders, LoginReaders, LogoutReaders } from "../controllers/ReaderController.js";
import { verifyToken_readers } from "../middleware/VerifyToken_Reader.js";
import { refreshToken_readers } from "../controllers/RefreshToken_Reader.js";

const router = express.Router();

router.get('/readers', verifyToken_readers, getReaders);
router.post('/readers', RegisterReaders);
router.post('/loginreaders', LoginReaders);
router.get('/tokenreaders', refreshToken_readers);
router.delete('/logoutreaders', LogoutReaders);

export default router;