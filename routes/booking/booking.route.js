const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const bookingController = require('../../controllers/booking/booking.controller.js');

router.post('/',  bookingController.addBooking);
router.get('/:id', bookingController.getBooking);
// Route for getting buyer orders
router.get('/orders/:email', verifyJWT, bookingController.getBuyerOrders);

module.exports = router;