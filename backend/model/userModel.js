const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ['male', 'female'], 
    required: true,
  },

  discountInfo: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema, "users");

module.exports = User;

// komang