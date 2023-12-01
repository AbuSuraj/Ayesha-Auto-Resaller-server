// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   categoryName: String,
//   image: String,
// });

// module.exports = mongoose.model('Category', categorySchema);
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryName: String,
  image: String,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
