import express from 'express';
const router = express.Router();


router.route('/').post(registerUser).get(protect, admin, getUsers);


export default router;
