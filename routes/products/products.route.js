// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const productController = require('../../controllers/products/products.controller.js')


router.get('/advertisement', productController.getAdvertisementItems);
router.patch('/advertisement/:id', verifyJWT, productController.changeProductStatus);
router.delete('/:id', verifyJWT, productController.deleteProduct);
router.get('/seller/:email', verifyJWT, productController.getProductsBySellerEmail);
router.post('/add',verifyJWT,  productController.addProduct);

module.exports = router;
