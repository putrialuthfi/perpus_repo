import express from "express";
import { getAdmins, RegisterAdmins, LoginAdmins, LogoutAdmins } from "../controllers/AdminController.js";
import { verifyToken_admins } from "../middleware/VerifyToken_Admin.js";
import { refreshToken_admins } from "../controllers/RefreshToken_Admin.js";

const router = express.Router();

router.get('/admins', verifyToken_admins, getAdmins);
router.post('/admins', RegisterAdmins);
router.post('/loginadmins', LoginAdmins);
router.get('/tokenadmins', refreshToken_admins);
router.delete('/logoutadmins', LogoutAdmins);

export default router;