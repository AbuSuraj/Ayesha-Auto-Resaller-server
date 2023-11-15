const Category = require('../models/Category');

exports.addCategory = verifyJWT,verifyAdmin,async (req, res) => {
  try {
    const category = req.body;
    const result = await Category.create(category);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
  //  async (req,res) =>{
  //   const category = req.body;
  //   const result = await categoryCollection.insertOne(category);
  //   res.send(result);
  // }
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
