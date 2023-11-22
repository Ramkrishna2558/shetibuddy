const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  type: String,
  verid: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
