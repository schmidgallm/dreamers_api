// Dependencies
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid-email address']
  },
  password: {
    type: String,
    required: true,
    validate: [
      input => {
        return input.length >= 6;
      },
      'Password must be at least 6 characters long'
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
