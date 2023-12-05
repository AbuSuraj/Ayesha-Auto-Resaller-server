// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   accountType: String,
//   verify: Boolean,
// });

// module.exports = mongoose.model('User', userSchema);

// models/userModel.js
import { ObjectId } from 'mongodb';
import client from '../database';

const userModel = {
  getUserByEmail: async (email) => {
    const usersCollection = client.db('ayeshaAutoReseller').collection('users');
    const query = { email };
    return await usersCollection.findOne(query);
  },

  addUser: async (user) => {
    const usersCollection = client.db('ayeshaAutoReseller').collection('users');
    const result = await usersCollection.insertOne(user);
    return result;
  },

  // Add other user-related functions as needed
};

export default userModel;
