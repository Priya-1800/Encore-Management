const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  place: String
});

module.exports = mongoose.model('Event', EventSchema);
