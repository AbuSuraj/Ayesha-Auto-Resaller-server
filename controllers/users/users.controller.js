// const User = require('../models/User');

// exports.addUser = async (req, res) => {
//   try {
//     const user = req.body;
//     const result = await User.create(user);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.send(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// // Add other user-related controller functions here

// controllers/userController.js
import userModel from '../models/userModel';

const userController = {
  getUserByEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const user = await userModel.getUserByEmail(email);
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  },

  addUser: async (req, res) => {
    try {
      const user = req.body;
      const result = await userModel.addUser(user);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  },

  // Add other user-related controller functions as needed
};

export default userController;
