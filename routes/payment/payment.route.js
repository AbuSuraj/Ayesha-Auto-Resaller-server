const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const paymentController = require('../../controllers/payment/payment.controller.js');
 
router.post('/', paymentController.addPayment);
router.post('/create-payment-intent', paymentController.createPaymentIntent);

module.exports = router;
