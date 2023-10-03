const Category = require('../models/Category');

exports.addCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await Category.create(category);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Add other category-related controller functions here
