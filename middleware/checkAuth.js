// middlewares.js

const jwt = require('jsonwebtoken');
const User = require('../model/users/Users.model.js');  

// Verify JWT middleware
exports.verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('Unauthorized access');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: 'Forbidden access' });
    }
    req.decoded = decoded;
    next();
  });
};

// Verify Admin middleware
exports.verifyAdmin = async (req, res, next) => {
  const decodedEmail = req.decoded.email;
  
  try {
    const user = await User.findOne({ email: decodedEmail });

    if (!user || user.accountType !== 'admin') {
      return res.status(403).send({ message: 'Forbidden access' });
    }
    next();
  } catch (error) {
    console.error('Error verifying admin:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
};
