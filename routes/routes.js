const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../middleware/checkAuth.js')
// Import controllers
const categoryController = require('../controllers/category/category.controller.js');
const reportController = require('../controllers/report/report.controller.js');
const userController = require('../controllers/users/users.controller.js');
const bookingController = require('../controllers/booking/booking.controller.js');
const productController = require('../controllers/products/products.controller.js');
const paymentController = require('../controllers/payment/payment.controller.js');

// Routes for products
router.get('/products/advertisement', productController.getAdvertisementItems);
router.patch('/products/advertisement/:id', verifyJWT, productController.changeProductStatus);
router.delete('/products/:id', verifyJWT, productController.deleteProduct);
router.get('/products/seller/:email', verifyJWT, productController.getProductsBySeller);
router.post('/products/add', verifyJWT, productController.addProduct);

// Routes for categories
router.post('/categories/add', verifyJWT, verifyAdmin,categoryController.addCategory);
router.get('/categories', verifyJWT,categoryController.getCategories);
router.get('/category/:id', verifyJWT, productController.getProductsByCategoryId);

// Routes for reports
router.post('/report', verifyJWT, reportController.addReport);
router.get('/report', verifyJWT, reportController.getReports);
router.delete('/report/:id', verifyJWT, verifyAdmin, reportController.deleteReport);

router.delete('/reportedItem/:id', verifyJWT, verifyAdmin, reportController.deleteReportedItem);

// Routes for users
router.post('/users', userController.addUser);
router.get('/user/:email', userController.getUser);
router.get('/users/admin/:email', verifyJWT, userController.isAdmin);
router.get('/users/seller/:email', verifyJWT, userController.isSeller);
router.get('/users/buyer/:email', verifyJWT, userController.isBuyer);

// Routes for bookings
router.post('/bookings',  bookingController.addBooking);
router.get('/bookings/:id', bookingController.getBooking);

// Routes for payments
router.post('/payments', verifyJWT, paymentController.addPayment);
router.get('/create-payment-intent', verifyJWT, paymentController.createPaymentIntent);


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
