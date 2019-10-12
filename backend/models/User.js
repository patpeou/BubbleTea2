const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  },
  password:{
    type: String,
    required: true,
    minLength: 5
  },
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

module.exports = mongoose.model('users', UserSchema);

