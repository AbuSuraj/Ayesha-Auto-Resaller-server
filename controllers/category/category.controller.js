// // import { verifyJWT, verifyAdmin } from 'path-to-your-authentication-middleware'; // Adjust the path accordingly
// import Category from '../../model/category/Category.js';


// export const addCategory = async (req, res) => {
//   try {
//     const category = req.body;
//     const result = await Category.create(category);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// export const getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.send(categories);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };
// export default { addCategory, getCategories };
// // Add other category-related controller functions here
// controllers/productController.js
import productModel from '../models/productModel';

const productController = {
  getProductsByCategoryId: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const products = await productModel.getProductsByCategoryId(categoryId);
      res.send(products);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  },

  addProduct: async (req, res) => {
    try {
      const product = req.body;
      const result = await productModel.addProduct(product);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  },

  // Add other product-related controller functions as needed
};

export default productController;
