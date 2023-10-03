const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  accountType: String,
  verify: Boolean,
});

module.exports = mongoose.model('User', userSchema);
