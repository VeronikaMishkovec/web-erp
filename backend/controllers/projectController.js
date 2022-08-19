/* eslint-disable @typescript-eslint/no-var-requires */
const projectService = require("../service/projectService");

class ProjectController {
  async createProject(req, res, next) {
    try {
      const { name, email } = req.body;

      const newProject = await projectService.createProject(name, email);

      return res.json(newProject);
    } catch (e) {
      next(e);
    }
  }

  async getProjectList(req, res, next) {
    try {
      const { user_id } = req.body;

      const allProjects = await projectService.allProjects(user_id);

      return res.json(allProjects);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProjectController();
