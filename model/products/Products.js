const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  originalPrice: Number,
  resalePrice: Number,
  location: String,
  categoryId: String,
  condition: String,
  mobile: String,
  productDescription: String,
  purchaseYear: String,
  image: String,
  createdDate: Date,
  seller: String,
  email: String,
  isAdvertised: Boolean,
  isPaid: Boolean,
});

const Product = mongoose.model('Product', productSchema);

 
export default Product;
