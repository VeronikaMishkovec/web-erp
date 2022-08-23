/* eslint-disable @typescript-eslint/no-var-requires */
const taskService = require("../service/tasksService");

class TaskController {
  async getTaskList(req, res, next) {
    try {
      const { project_id } = req.body;

      const allTasks = await taskService.allTasks(project_id);

      return res.json(allTasks);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TaskController();
