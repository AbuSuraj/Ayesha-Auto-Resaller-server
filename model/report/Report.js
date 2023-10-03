const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  productName: String,
  name: String,
  email: String,
  phone: String,
  meetingLocation: String,
  image: String,
  resalePrice: Number,
  product_id: String,
  paid: Boolean,
  transactionId: String,
});

module.exports = mongoose.model('Report', reportSchema);
