const errorHandler = require("../utils/errorHandler");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../models/userModal");

// User Registration
const userRegister = async (req, res,next) => {
  const { fullName, userName,profileImg } = req.body;
  let { password } = req.body;
  if (!fullName || !userName || !password || !profileImg)
    return res
      .status(403)
      .json({ success: false, message: "Please provide all the details" });

  try {
    const isUser = await User.findOne({ userName });
    if (isUser) {
      return res
        .status(403)
        .json({ success: true, message: "User Already exists." });
    }
    // hashing the passport
    password = await bcrypt.hash(password, 10);
    const user = new User({ fullName, userName, password, profileImg });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User Created Successfully." });
  } catch (error) {
    console.log("Error in Register user response", error);
    next(error);
  }
};

// User login
const userLogin = async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return next(errorHandler(401, "Please fill all the details!!"));
  }
  try {
    // Checking whether user is present or not
    const isValidUser = await User.findOne({ userName });
    if (!isValidUser) {
      return next(errorHandler(403, "User does not exists!!"));
    }
    // Checking whether password is correct or not
    const isValidPassword = bcrypt.compareSync(password, isValidUser.password);
    if (!isValidPassword) {
      return next(errorHandler(403, "Password is incorrect!!"));
    }
    // Generating token
    const token = await jwt.sign(
      { id: isValidPassword._id },
      "DummyJWTSecretKey"
    );
    const { password: pass, ...rest } = isValidUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        // expires: new Date(Date.now() + 24 * 60 * 60 * 7),
      })
      .status(200)
      .json({success:true,message:"User Logged In Successfully",userDetails:rest});
  } catch (error) {
    console.log("Error in Login user response", error);
    next(error);
  }
};
module.exports = {
  userRegister,
  userLogin,
};
