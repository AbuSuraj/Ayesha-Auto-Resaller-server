// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   productName: String,
//   originalPrice: Number,
//   resalePrice: Number,
//   location: String,
//   categoryId: String,
//   condition: String,
//   mobile: String,
//   productDescription: String,
//   purchaseYear: String,
//   image: String,
//   createdDate: Date,
//   seller: String,
//   email: String,
//   isAdvertised: Boolean,
//   isPaid: Boolean,
// });

// module.exports = mongoose.model('Product', productSchema);

// models/productModel.js
import { ObjectId } from 'mongodb';
import client from '../database';

const productModel = {
  getProductsByCategoryId: async (categoryId) => {
    const productCollection = client.db('ayeshaAutoReseller').collection('products');
    const query = { categoryId, isPaid: false };
    return await productCollection.find(query).toArray();
  },

  addProduct: async (product) => {
    const productCollection = client.db('ayeshaAutoReseller').collection('products');
    const result = await productCollection.insertOne(product);
    return result;
  },

  // Add other product-related functions as needed
};

export default productModel;
