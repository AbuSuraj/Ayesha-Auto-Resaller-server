const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  accountType: String,
  verify: Boolean,
});

const User = mongoose.model('User', userSchema);

 

export default User;
