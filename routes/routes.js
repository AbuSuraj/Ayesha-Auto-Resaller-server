const express = require('express');
const router = express.Router();

// Import controllers
const categoryController = require('../controllers/categoryController');
const reportController = require('../controllers/reportController');
const userController = require('../controllers/userController');
const bookingController = require('../controllers/bookingController');
const paymentController = require('../controllers/paymentController');

// Routes for categories
router.post('/categories/add', categoryController.addCategory);
router.get('/categories', categoryController.getCategories);
router.get('/category/:id', productController.getProductsByCategoryId);

// Routes for reports
router.post('/report', reportController.addReport);
router.get('/report', reportController.getReports);
router.delete('/report/:id', reportController.deleteReport);

// Routes for users
router.post('/users', userController.addUser);
router.get('/user/:email', userController.getUser);
router.get('/users/admin/:email', userController.isAdmin);
router.get('/users/seller/:email', userController.isSeller);
router.get('/users/buyer/:email', userController.isBuyer);

// Routes for bookings
router.post('/bookings', bookingController.addBooking);
router.get('/bookings/:id', bookingController.getBooking);

// Routes for payments
router.post('/payments', paymentController.addPayment);
router.get('/create-payment-intent', paymentController.createPaymentIntent);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const paymentRoutes = require('../routes/payment/payment.route.js')

// // payments route 
// router.use('/payments', paymentRoutes);
// // const categoryController = require('../controllers/categoryController');
// // const reportController = require('../controllers/reportController');
// // const productController = require('../controllers/productController');
// // const userController = require('../controllers/userController');
// // const bookingController = require('../controllers/bookingController');

// // // Category routes
// // router.post('/categories', categoryController.addCategory);
// // router.get('/categories', categoryController.getCategories);

// // // Report routes
// // router.post('/report', reportController.addReport);
// // router.get('/report', reportController.getReports);

// // Add other routes and controllers for reports, products, users, and bookings

// module.exports = router;
