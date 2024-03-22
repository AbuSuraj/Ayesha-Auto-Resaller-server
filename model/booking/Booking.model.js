const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  productName: String,
  name: String,
  email: String,
  phone: String,
  meetingLocation: String,
  image: String,
  resalePrice: Number,
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Reference to the Product model
  },
  paid: Boolean,
  transactionId: String,
});

const Booking = mongoose.model('Booking', bookingSchema);
 

module.exports = Booking;
