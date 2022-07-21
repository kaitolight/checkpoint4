const express = require("express");

const userController = require("./controllers/userController");

const router = express.Router();

// Routes for user
router.post("/user/register", userController.createOne);

module.exports = router;
