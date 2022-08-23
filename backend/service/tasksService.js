/* eslint-disable @typescript-eslint/no-var-requires */

const TaskModel = require("../models/taskModel");

class TasksService {
  async allTasks(project_id) {
    let taskList = [];
    for (let i = 0; i < project_id.length; i++) {
      const task = await TaskModel.find({ project_id: project_id[i] });
      taskList = [...taskList, task].flat();
    }
    return taskList;
  }
}
module.exports = new TasksService();
