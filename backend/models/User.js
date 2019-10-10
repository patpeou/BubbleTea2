const mongoose = require('mongoose');

const User = mongoose.model('users', {
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minLength: 4,
    trim: true
  },
  isActive: {
    type: Number,
    default: 0,
    minLength: 4
  }
});

module.exports = User;

