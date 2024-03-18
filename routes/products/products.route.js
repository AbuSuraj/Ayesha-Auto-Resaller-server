// routes/productRoutes.js
import express from 'express';
const router = express.Router();
import productController from '../controllers/productController';

router.get('/category/:id', productController.getProductsByCategoryId);
router.post('/addproduct', productController.addProduct);

export default router;
