const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Include routes
const routes = require('./routes');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Ayesha Auto Reseller server is running');
});

app.listen(port, () => {
  console.log(`Ayesha Auto Reseller server running on ${port}`);
});
