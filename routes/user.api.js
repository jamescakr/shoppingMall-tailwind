const express = require("express");
const router = express.Router();

//sign up >> post
router.post("/", userController.createUser);

module.exports = router;
