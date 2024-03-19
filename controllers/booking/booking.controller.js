const Booking = require('../../model/booking/Booking.model.js');


exports.addBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const newBooking = await Booking.create(bookingData);
    res.json(newBooking);
  } catch (error) {
    console.error("Error adding booking:", error);
    res.status(500).json({ error: "Failed to add booking" });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ error: "Failed to fetch booking" });
  }
};
exports.getBuyerOrders = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email };
    const myOrders = await Booking.find(query);
    res.json(myOrders);
  } catch (error) {
    console.error("Error fetching buyer orders:", error);
    res.status(500).json({ error: "Failed to fetch buyer orders" });
  }
};

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

