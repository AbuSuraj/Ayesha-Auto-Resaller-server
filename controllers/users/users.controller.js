const User = require('../../model/users/Users.model.js');

exports.verifySeller = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, { verify: true }, { new: true });
    res.json(user);
  } catch (error) {
    console.error("Error verifying seller:", error);
    res.status(500).json({ error: "Failed to verify seller" });
  }
};
 
exports.deleteBuyer = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ message: "Buyer deleted successfully" });
  } catch (error) {
    console.error("Error deleting buyer:", error);
    res.status(500).json({ error: "Failed to delete buyer" });
  }
};

exports.getAllBuyers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = { accountType: 'buyer' };

    const sortColumn = req.query.sort || 'name'; // Default to 'name' if no sort column is provided
    const sortOrder = req.query.order || 'asc'; // Default to 'asc' if no sort order is provided

    const sortOptions = {};
    sortOptions[sortColumn] = sortOrder === 'asc' ? 1 : -1;

    const buyers = await User.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortOptions);

    const totalBuyers = await User.countDocuments(query);

    res.json({
      data: buyers,
      total: totalBuyers,
      currentPage: page,
      totalPages: Math.ceil(totalBuyers / limit),
    });
  } catch (error) {
    console.error("Error getting all buyers:", error);
    res.status(500).json({ error: "Failed to get all buyers" });
  }
};


exports.deleteSeller = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ message: "Seller deleted successfully" });
  } catch (error) {
    console.error("Error deleting seller:", error);
    res.status(500).json({ error: "Failed to delete seller" });
  }
};

exports.getAllSellers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = { accountType: 'seller' };
    const sortColumn = req.query.sort || 'name'; // Default to sorting by 'name'
    const sortOrder = req.query.order || 'asc'; // Default to ascending order

    const sortOptions = {};
    sortOptions[sortColumn] = sortOrder === 'asc' ? 1 : -1;

    const sellers = await User.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    const totalSellers = await User.countDocuments(query);

    res.json({
      data: sellers,
      total: totalSellers,
      currentPage: page,
      totalPages: Math.ceil(totalSellers / limit),
    });
  } catch (error) {
    console.error("Error getting all sellers:", error);
    res.status(500).json({ error: "Failed to get all sellers" });
  }
};


exports.addUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to add user" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Failed to get user" });
  }
};

exports.isAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ isAdmin: user.accountType === 'admin' });
  } catch (error) {
    console.error("Error checking admin status:", error);
    res.status(500).json({ error: "Failed to check admin status" });
  }
};

exports.isSeller = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ isSeller: user.accountType === 'seller' });
  } catch (error) {
    console.error("Error checking seller status:", error);
    res.status(500).json({ error: "Failed to check seller status" });
  }
};

exports.isBuyer = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ isBuyer: user.accountType === 'buyer' });
  } catch (error) {
    console.error("Error checking buyer status:", error);
    res.status(500).json({ error: "Failed to check buyer status" });
  }
};

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
// import userModel from '../models/userModel';

// const userController = {
//   getUserByEmail: async (req, res) => {
//     try {
//       const email = req.params.email;
//       const user = await userModel.getUserByEmail(email);
//       res.send(user);
//     } catch (error) {
//       res.status(500).send({ error: 'Internal Server Error' });
//     }
//   },

//   addUser: async (req, res) => {
//     try {
//       const user = req.body;
//       const result = await userModel.addUser(user);
//       res.send(result);
//     } catch (error) {
//       res.status(500).send({ error: 'Internal Server Error' });
//     }
//   },

//   // Add other user-related controller functions as needed
// };

// export default userController;
