const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const paymentController = require('../../controllers/payment/payment.controller.js');
 
router.post('/', verifyJWT, paymentController.addPayment);
router.get('/create-payment-intent', verifyJWT, paymentController.createPaymentIntent);

module.exports = router;
