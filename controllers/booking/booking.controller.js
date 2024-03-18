// const Booking = require('../models/Booking');

// exports.addBooking = async (req, res) => {
//   try {
//     const booking = req.body;
//     const result = await Booking.create(booking);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// exports.getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.send(bookings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// // Add other booking-related controller functions here
// controllers/bookingController.js
import bookingModel from '../models/bookingModel';

const bookingController = {
  addBooking: async (req, res) => {
    try {
      const booking = req.body;
      const result = await bookingModel.addBooking(booking);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  },

  // Add other booking-related controller functions as needed
};

export default bookingController;
