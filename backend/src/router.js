const express = require("express");

const userController = require("./controllers/userController");

const router = express.Router();

// Routes for user
router.post("/user/register", userController.createOne);
router.post("/user/login", userController.login);
router.get("/users", userController.getAll);
router.get("/user/:userId", userController.getOne);
router.put("/user/:userId", userController.updateOne);
router.delete("/user/:userId", userController.deleteOne);

module.exports = router;
