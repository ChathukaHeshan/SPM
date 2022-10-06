import express from 'express';
const router = express.Router();
import {
    
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUsers,
    
  } from '../controllers/userController.js';
  import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
