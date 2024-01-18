const express = require('express');
const router = express.Router();
const paymentRoutes = require('../routes/payment/payment.route.js')

// payments route 
router.use('/payments', paymentRoutes);
// const categoryController = require('../controllers/categoryController');
// const reportController = require('../controllers/reportController');
// const productController = require('../controllers/productController');
// const userController = require('../controllers/userController');
// const bookingController = require('../controllers/bookingController');

// // Category routes
// router.post('/categories', categoryController.addCategory);
// router.get('/categories', categoryController.getCategories);

// // Report routes
// router.post('/report', reportController.addReport);
// router.get('/report', reportController.getReports);

// Add other routes and controllers for reports, products, users, and bookings

module.exports = router;
