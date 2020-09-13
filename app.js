const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

//mongodb
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/wellness-logger", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.once("open", (err) => {
  if (err) {
    console.log("MongoDB connection not successful");
  } else {
    console.log("MongoDB connected");
  }
});

//schemas
const user = require("./models/user");
const entry = require("./models/entry");

app.post("/user", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const newUser = new user({
    username: username,
    password: password,
  });

  const savedUser = await newUser.save();

  if (savedUser) {
    res.json(savedUser);
  } else {
    res.status(500).json({ msg: "Unable to save user" });
  }
});

app.post("/entry", async (req, res) => {
  let title = req.body.title;
  let rating = req.body.rating;
  let description = req.body.description;
  let user = req.body.user;

  const newEntry = new entry({
    title: title,
    rating: rating,
    description: description,
    user: user,
  });

  const savedEntry = await newEntry.save();

  if (savedEntry) {
    res.json(savedEntry);
  } else {
    res.status(500).json({ msg: "Unable to save entry" });
  }
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
