import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";
import { registerUser, logoutUser, getUserProfile, updateUserProfile} from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js";

router.post('/signup', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;