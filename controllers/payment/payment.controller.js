const Payment = require('../../model/payment/Payment.model.js');
const Booking = require('../../model/payment/Payment.model.js');
const Product = require('../../model/products/Products.model.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const { bookingsCollection, productCollection } = require('../your-database-setup');  
exports.addPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const newPayment = await Payment.create(paymentData);

    // Update booking to mark as paid
    const { bookingId, product_id, transactionId } = paymentData;
    const filter = { _id: bookingId };
    const bookingUpdate = {
      $set: {
        paid: true,
        transactionId: transactionId,
      },
    };
    await Booking.updateOne(filter, bookingUpdate);

    // Update product to mark as paid
    const productFilter = { _id: product_id };
    const productUpdate = {
      $set: {
        isPaid: true,
      },
    };
    await Product.updateOne(productFilter, productUpdate);

    res.json(newPayment);
  } catch (error) {
    console.error("Error adding payment:", error);
    res.status(500).json({ error: "Failed to add payment" });
  }
};

exports.createPaymentIntent = async (req, res) => {
  try {
   
    const { resalePrice } = req.body;;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'bdt',
      amount: resalePrice * 100, // Amount in cents
      payment_method_types: ['card'],
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
};

// async function handlePayment(req, res) {
//   try {
//     const paymentData = req.body;

//     // Insert payment into Payment collection
//     const payment = new Payment(paymentData);
//     const result = await payment.save();

//     // Update booking status and product status
//     const { bookingId, product_id, transactionId } = paymentData;
//     const filter = { _id: ObjectId(bookingId) };
//     const query = { _id: ObjectId(product_id) };

//     const updateBookingDoc = {
//       $set: {
//         paid: true,
//         transactionId,
//       },
//     };

//     const updateProductDoc = {
//       $set: {
//         isPaid: true,
//       },
//     };

//     // Update the booking status
//     const updatedBookingResult = await Booking.updateOne(filter, updateBookingDoc);

//     // Update the product status
//     const updatedProductResult = await Product.updateOne(query, updateProductDoc);

//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// module.exports = { handlePayment };
