// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   categoryName: String,
//   image: String,
// });

// module.exports = mongoose.model('Category', categorySchema);
// categoryModel.js
// models/categoryModel.js
import { ObjectId } from 'mongodb';
import client from '../database';

const categoryModel = {
  getAllCategories: async () => {
    const categoryCollection = client.db('ayeshaAutoReseller').collection('categories');
    return await categoryCollection.find({}).toArray();
  },

  addCategory: async (category) => {
    const categoryCollection = client.db('ayeshaAutoReseller').collection('categories');
    const result = await categoryCollection.insertOne(category);
    return result;
  },

  // Add other category-related functions as needed
};

export default categoryModel;

 
