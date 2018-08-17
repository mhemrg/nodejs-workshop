const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        // index: true
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;