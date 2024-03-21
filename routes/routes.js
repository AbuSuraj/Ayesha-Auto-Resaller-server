const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../middleware/checkAuth.js')
// Import controllers
// const categoryController = require('../controllers/category/category.controller.js');
const reportController = require('../controllers/report/report.controller.js');
const userController = require('../controllers/users/users.controller.js');
const bookingController = require('../controllers/booking/booking.controller.js');
const productController = require('../controllers/products/products.controller.js');
const paymentController = require('../controllers/payment/payment.controller.js');
const categoryRoutes = require('../routes/category/categories.route.js');
const productsRoutes = require('../routes/products/products.route.js');
const reportRoutes = require('../routes/report/report.route.js');
const usersRoutes = require('../routes/users/users.route.js');
// Routes for products
router.use('/products', productsRoutes);

// Routes for categories
router.use('/categories', categoryRoutes);

// Routes for reports
router.use('/report', reportRoutes);

// Routes for users
router.use('/users', usersRoutes);


// Routes for bookings
router.post('/bookings',  bookingController.addBooking);
router.get('/bookings/:id', bookingController.getBooking);
// Route for getting buyer orders
router.get('/myorders/buyer/:email', verifyJWT, bookingController.getBuyerOrders);

// Routes for payments
router.post('/payments', verifyJWT, paymentController.addPayment);
router.get('/create-payment-intent', verifyJWT, paymentController.createPaymentIntent);


module.exports = router;


