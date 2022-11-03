const express = require("express");
const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ msg: "Something missing" });
  }

  const user = await UserSchema.findOne({ email: email }); // finding user in db
  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }

  // comparing the password with the saved hash-password
  const matchPassword = await bcrypt.compare(password, user.password);
  if (matchPassword) {
    return res.status(200).json({ msg: "You have logged in successfully" });
  } else {
    return res.status(400).json({ msg: "Invalid credential" });
  }
});

module.exports = router;
