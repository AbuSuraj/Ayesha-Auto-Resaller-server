// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   productName: String,
//   name: String,
//   email: String,
//   phone: String,
//   meetingLocation: String,
//   image: String,
//   resalePrice: Number,
//   product_id: String,
//   paid: Boolean,
//   transactionId: String,
// });

// module.exports = mongoose.model('Booking', bookingSchema);
// models/bookingModel.js
import { ObjectId } from 'mongodb';
import client from '../database';

const bookingModel = {
  addBooking: async (booking) => {
    const bookingsCollection = client.db('ayeshaAutoReseller').collection('bookings');
    const result = await bookingsCollection.insertOne(booking);
    return result;
  },

  // Add other booking-related functions as needed
};

export default bookingModel;
