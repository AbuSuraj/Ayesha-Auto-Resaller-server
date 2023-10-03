const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await Product.create(product);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Add other product-related controller functions here
