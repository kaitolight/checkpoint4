const express = require("express");

const userController = require("./controllers/userController");
const projectController = require("./controllers/projectController");

const router = express.Router();

// Routes for user
router.post("/user/register", userController.createOne);
router.post("/user/login", userController.login);
router.get("/user/logout", userController.logout);
router.get("/users", userController.getAll);
router.get("/user/:userId", userController.getOne);
router.put("/user/:userId", userController.updateOne);
router.delete("/user/:userId", userController.deleteOne);

// Routes for projects

router.post("/user/:userId/project", projectController.createOne);
router.get("/user/:userId/projects", projectController.getAll);
router.get("/user/:userId/project/:projectId", projectController.getOne);
router.get("/front/project/:projectId", projectController.getOneWithoutId);
router.put("/user/:userId/project/:projectId", projectController.updateOne);
router.delete("/user/:userId/project/:projectId", projectController.deleteOne);

module.exports = router;
