const express = require("express");
const { userRegister } = require("../controllers/userController.js");
const router = express.Router();


router.post("/register", userRegister);

module.exports = router;
