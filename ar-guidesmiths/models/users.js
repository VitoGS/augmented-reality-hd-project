const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user: {
    type: Object,
    username: { type: String }
  },
  image: {
    type: Object,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;