const mongoose = require('mongoose');

const honeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // image: {
  //   type: String,
  //   required: true
  // }
});

const Honey = mongoose.model('Honey', honeySchema);

module.exports = Honey;
