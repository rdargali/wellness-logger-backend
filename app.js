const express = require("express");
const app = express();

//mongodb
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
