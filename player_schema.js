const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    wickets: {
      type: Number,
    },
    catches: {
      type: Number,
    },
    runs:{
        type: Number

    }
  })

  module.exports = mongoose.model('details', playerSchema);

