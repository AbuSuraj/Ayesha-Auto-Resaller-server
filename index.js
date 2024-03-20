const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const routes = require('./routes/routes');
const port = process.env.PORT || 5000;
const { dbConnect } = require('./utils/DB/dbConnect.js')

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to the database using dbConnect method
dbConnect()

  // const db = client.db('ayeshaAutoReseller');

  // Pass the database instance to routes and controllers
  // app.use((req, res, next) => {
  //   // req.db = db;
  //   next();
  // });

  // Use the routes
  app.use('/', routes);



app.get('/', (req, res) => {
  res.send('Ayesha Auto Reseller server is running');
});

app.listen(port, () => {
  console.log(`Ayesha Auto Reseller server running on ${port}`);
});
