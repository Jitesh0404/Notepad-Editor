const express = require("express");
const { addMember, listMembers } = require("../controllers/membersController");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

// member route
router.post("/addMember",verifyToken,addMember);
router.get("/listMembers",verifyToken,listMembers);

module.exports = router;