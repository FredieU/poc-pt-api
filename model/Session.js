const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  time: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Session", sessionSchema);
