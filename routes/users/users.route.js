const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const userController = require('../../controllers/users/users.controller.js');

// Verify seller route
router.patch('/verify-seller/:id', verifyJWT, verifyAdmin, userController.verifySeller);
 

// Delete buyer route
router.delete('/buyer/:id', verifyJWT, verifyAdmin, userController.deleteBuyer);

// Get all buyers route
router.get('/buyers', userController.getAllBuyers);

// Delete seller route
router.delete('/seller/:id', verifyJWT, verifyAdmin, userController.deleteSeller);

// Get all sellers route
router.get('/sellers',  userController.getAllSellers);

router.post('/', userController.addUser);
router.get('/:email', userController.getUser);
router.get('/admin/:email', verifyJWT, userController.isAdmin);
router.get('/seller/:email', verifyJWT, userController.isSeller);
router.get('/buyer/:email', verifyJWT, userController.isBuyer);


module.exports = router;