const User = require('../models/User');

exports.addUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await User.create(user);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Add other user-related controller functions here
