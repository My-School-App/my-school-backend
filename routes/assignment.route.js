const assignmentController = require("../controllers/assignment.controller");
const router = require("express").Router();

router.get("/", assignmentController.assignmentHandler);

module.exports = router;
