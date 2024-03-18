const Product = require('../../model/products/Products.model.js');
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js'); 
exports.getProductsByCategoryId = async (req, res) => {
  try {
    verifyJWT(req, res);
    const categoryId = req.params.id;
    const products = await Product.find({ categoryId });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

// exports.addProduct = async (req, res) => {
//   try {
//     const product = req.body;
//     const result = await Product.create(product);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.send(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };


