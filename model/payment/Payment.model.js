const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  resalePrice: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking', // Reference to the Booking model
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
