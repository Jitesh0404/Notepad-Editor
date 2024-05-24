const bcrypt = require("bcrypt");
const express = require("express");
const User = require("../models/userModal");

const userRegister = async (req, res) => {
  const { fullName, userName } = req.body;
  let {password} = req.body;
  if (!fullName || !userName || !password)
    return res
      .status(403)
      .json({ success: false, message: "Please fill all the details" });

  try {
    const isUser = await User.findOne({ userName });
    if (isUser) {
      return res
        .status(403)
        .json({ success: true, message: "User Already exists." });
    }
    // hashing the passport
    password = await bcrypt.hash(password, 10);
    const user = new User({ fullName, userName, password });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User Created Successfully." });
  } catch (error) {
    console.log("Error in Register user response", error);
    next(error);
  }
};

module.exports = {
  userRegister,
};
