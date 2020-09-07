const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: String,
  rating: Number,
  description: String,
  date: { type: Date, default: Date.now },
  user: String,
});

const entry = mongoose.model("entry", entrySchema);

module.exports = entry;
