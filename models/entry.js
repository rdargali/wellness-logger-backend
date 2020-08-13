const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: String,
  rating: Number,
  description: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const entry = mongoose.model("entry", entrySchema);

module.exports = entry;
