const mongoose = require('mongoose');

const karmaSchema = new mongoose.Schema({
  _id: {
    email: Object,
    orgId: { type: String }
  },
  score: { type: Number },
}, { timestamps: true, collection: 'karma' });

const Karma = mongoose.model('Karma', karmaSchema);
module.exports = Karma;