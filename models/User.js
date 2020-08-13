const mongoose = require("mongoose");
const entry = require("./entry");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  entries: [entry.schema],
});

const user = mongoose.model("user", userSchema);

module.exports = user;
