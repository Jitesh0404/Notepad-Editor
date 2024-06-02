const express = require("express");
const { addMember } = require("../controllers/membersController");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

// member route
router.post("/addMember",verifyToken,addMember);

module.exports = router;