const mongoose = require('mongoose'); // mongoose required
require('dotenv').config(); // Load environment variables
const database = process.env.DB_URL;
console.log(database,"database");
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 90000, // Timeout after 90s
    poolSize: 10, // Number of connections in the pool
});

const db = mongoose.connection;

db.on('error', (err) => {
    if (err.code === 'ETIMEDOUT') {
        console.error('Connection timed out!');
    } else {
        console.error('MongoDB connection error:', err);
    }
});

db.once('open', () => {
    console.log('Connected to database :: MongoDB');
});

module.exports = db;
