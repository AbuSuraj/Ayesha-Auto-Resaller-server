const express = require('express');
const router = express.Router();
const {handlePayment} = require('../../controllers/payment/payment.controller.js');

// Middleware to parse JSON in request body
router.use(express.json());

// Payment route
router.post('/', handlePayment);

module.exports = router;
