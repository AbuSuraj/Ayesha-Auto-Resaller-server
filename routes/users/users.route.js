// routes/userRoutes.js
import express from 'express';
const router = express.Router();
import userController from '../controllers/userController';

router.get('/user/:email', userController.getUserByEmail);
router.post('/users', userController.addUser);

export default router;
