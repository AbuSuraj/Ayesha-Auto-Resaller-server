// routes/bookingRoutes.js
import express from 'express';
const router = express.Router();
import bookingController from '../controllers/bookingController';

router.post('/bookings', bookingController.addBooking);

export default router;
