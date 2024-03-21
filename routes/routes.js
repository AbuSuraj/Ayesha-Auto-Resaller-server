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
// Routes for products
router.use('/products', productsRoutes);


// Routes for categories
router.use('/categories', categoryRoutes);
// router.post('/categories/add', categoryController.addCategory);
// router.get('/categories',categoryController.getCategories);
// router.get('/category/:id', verifyJWT, productController.getProductsByCategoryId);

// Routes for reports
router.use('/report', reportRoutes);

// Routes for users
router.post('/users', userController.addUser);
router.get('/user/:email', userController.getUser);
router.get('/users/admin/:email', verifyJWT, userController.isAdmin);
router.get('/users/seller/:email', verifyJWT, userController.isSeller);
router.get('/users/buyer/:email', verifyJWT, userController.isBuyer);

// Verify seller route
router.patch('/verifySeller/:id', verifyJWT, verifyAdmin, userController.verifySeller);
 

// Delete buyer route
router.delete('/buyer/:id', verifyJWT, verifyAdmin, userController.deleteBuyer);

// Get all buyers route
router.get('/buyers', verifyJWT, verifyAdmin, userController.getAllBuyers);

// Delete seller route
router.delete('/seller/:id', verifyJWT, verifyAdmin, userController.deleteSeller);

// Get all sellers route
router.get('/sellers',  userController.getAllSellers);


// Routes for bookings
router.post('/bookings',  bookingController.addBooking);
router.get('/bookings/:id', bookingController.getBooking);
// Route for getting buyer orders
router.get('/myorders/buyer/:email', verifyJWT, bookingController.getBuyerOrders);

// Routes for payments
router.post('/payments', verifyJWT, paymentController.addPayment);
router.get('/create-payment-intent', verifyJWT, paymentController.createPaymentIntent);


module.exports = router;


