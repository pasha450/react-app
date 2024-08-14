const express = require('express');
const router = express.Router();
const db = require('../config/mongoose');


router.use('/api', require('./auth')); // Assuming './auth' is your admin authentication middleware or router.
router.use('/api/user', require('./user')); // Assuming './user' is your user management middleware or router.

module.exports = router;
