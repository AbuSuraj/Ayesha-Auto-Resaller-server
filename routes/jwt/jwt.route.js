const express = require('express');
const router = express.Router();
const jwtController = require('../../controllers/jwt/jwt.controller.js');

router.get('/', jwtController.generateAccessToken);

module.exports = router;
