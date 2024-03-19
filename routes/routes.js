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
router.get('/products/seller/:email', verifyJWT, productController.getProductsBySellerEmail);
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

// Verify seller route
router.patch('/verifySeller/:id', verifyJWT, verifyAdmin, userController.verifySeller);
 

// Delete buyer route
router.delete('/buyer/:id', verifyJWT, verifyAdmin, userController.deleteBuyer);

// Get all buyers route
router.get('/buyers', verifyJWT, verifyAdmin, userController.getAllBuyers);

// Delete seller route
router.delete('/seller/:id', verifyJWT, verifyAdmin, userController.deleteSeller);

// Get all sellers route
router.get('/sellers', verifyJWT, verifyAdmin, userController.getAllSellers);


// Routes for bookings
router.post('/bookings',  bookingController.addBooking);
router.get('/bookings/:id', bookingController.getBooking);
// Route for getting buyer orders
router.get('/myorders/buyer/:email', verifyJWT, bookingController.getBuyerOrders);

// Routes for payments
router.post('/payments', verifyJWT, paymentController.addPayment);
router.get('/create-payment-intent', verifyJWT, paymentController.createPaymentIntent);


module.exports = router;


