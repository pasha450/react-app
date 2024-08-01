const express = require('express');
const router = express.Router();


router.use('/api', require('./auth')); // Assuming './auth' is your admin authentication middleware or router.
router.use('/user', require('./user')); // Assuming './user' is your user management middleware or router.

module.exports = router;
