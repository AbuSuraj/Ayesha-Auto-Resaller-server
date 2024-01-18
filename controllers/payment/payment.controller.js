const Payment = require('../../model/payment/Payment.model.js');
const Booking = require('../../model/payment/Payment.model.js');
const Product = require('../../model/products/Products.model.js');
// const { bookingsCollection, productCollection } = require('../your-database-setup');  

async function handlePayment(req, res) {
  try {
    const paymentData = req.body;

    // Insert payment into Payment collection
    const payment = new Payment(paymentData);
    const result = await payment.save();

    // Update booking status and product status
    const { bookingId, product_id, transactionId } = paymentData;
    const filter = { _id: ObjectId(bookingId) };
    const query = { _id: ObjectId(product_id) };

    const updateBookingDoc = {
      $set: {
        paid: true,
        transactionId,
      },
    };

    const updateProductDoc = {
      $set: {
        isPaid: true,
      },
    };

    // Update the booking status
    const updatedBookingResult = await Booking.updateOne(filter, updateBookingDoc);

    // Update the product status
    const updatedProductResult = await Product.updateOne(query, updateProductDoc);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { handlePayment };
