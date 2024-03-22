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

exports.getAdvertisementItems = async (req, res) => {
  try {
    const query = { isAdvertised: true, isPaid: false };
    const advertisementItems = await Product.find(query);
    res.json(advertisementItems);
  } catch (error) {
    console.error("Error fetching advertisement items:", error);
    res.status(500).json({ error: "Failed to fetch advertisement items" });
  }
};

exports.changeProductStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, { isAdvertised: true }, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error changing product status:", error);
    res.status(500).json({ error: "Failed to change product status" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.getProductsBySellerEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const myProducts = await Product.find({ email });
    res.json(myProducts);
  } catch (error) {
    console.error("Error fetching products by seller email:", error);
    res.status(500).json({ error: "Failed to fetch products by seller email" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await Product.create(product);
    res.json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
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


