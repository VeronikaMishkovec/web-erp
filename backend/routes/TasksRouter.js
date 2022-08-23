/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express").Router;

const TaskController = require("../controllers/taskController");

const router = new Router();

router.post("/all-tasks", TaskController.getTaskList);

module.exports = router;
