const User = require("../models/User");
const ContactUs = require("../models/ContactUs");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const global = require("../_helper/GlobalHelper");
const jwt = require('jsonwebtoken');

module.exports = {
    editProfile,
    contactUs,
};

async function editProfile(req, res) {
    try {
        const {userId} = req.body;

        let userData = await User.findByIdAndUpdate(userId , req.body);

        if (!userData) {
            return res.status(401).json({ status: false, error: 'Sorry ! No Data Found' });
        }
       
        res.status(200).json({status: true, userData:userData});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Login failed' });
    }
}

async function contactUs(req, res) {
    try {
        await ContactUs.create(req.body);
        res.status(200).json({ status: true, message: "User created successfully!" });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Something went wrong !' });
    }
}