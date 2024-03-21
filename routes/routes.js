const express = require('express');
const router = express.Router();
const categoryRoutes = require('../routes/category/categories.route.js');
const productsRoutes = require('../routes/products/products.route.js');
const reportRoutes = require('../routes/report/report.route.js');
const usersRoutes = require('../routes/users/users.route.js');
const bookingRoutes = require('../routes/booking/booking.route.js');
const paymentRoutes = require('../routes/payment/payment.route.js');

// Routes for products
router.use('/products', productsRoutes);

// Routes for categories
router.use('/categories', categoryRoutes);

// Routes for reports
router.use('/report', reportRoutes);

// Routes for users
router.use('/users', usersRoutes);


// Routes for bookings
router.use('/booking', bookingRoutes)

// Routes for payments
router.use('/payment', paymentRoutes);


module.exports = router;


