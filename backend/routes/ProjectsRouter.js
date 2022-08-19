/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express").Router;

const ProjectController = require("../controllers/projectController");

const router = new Router();

router.post("/create-new-project", ProjectController.createProject);
router.post("/all-projects", ProjectController.getProjectList);

module.exports = router;
