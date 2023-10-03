const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: String,
  image: String,
});

module.exports = mongoose.model('Category', categorySchema);
