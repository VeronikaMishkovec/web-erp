/* eslint-disable @typescript-eslint/no-var-requires */

const UserDto = require("../dtos/userDto");
const ApiError = require("../exeptions/apiError");
const ProjectModel = require("../models/projectModel");
const TaskModel = require("../models/taskModel");
const UserModel = require("../models/userModel");

class ProjectService {
  async createProject(name, email) {
    const project = await ProjectModel.findOne({ name });
    const user = await UserModel.findOne({ email });

    if (project) {
      throw ApiError.BadRequest(`Project ${name} is already exist`);
    }

    const date = new Date();
    const newProject = await ProjectModel.create({
      status: "Active",
      name,
      created_date: date,
      closed_date: null,
      user_id: user._id,
    });
    return newProject;
  }
}
module.exports = new ProjectService();
