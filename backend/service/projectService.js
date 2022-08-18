/* eslint-disable @typescript-eslint/no-var-requires */

const ProjectsDto = require("../dtos/projectDto");
const ApiError = require("../exeptions/apiError");
const ProjectModel = require("../models/projectModel");
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

  async allProjects(userId) {
    const project = await ProjectModel.find({ user_id: userId });

    const projectsList = project.map((p) => new ProjectsDto(p));

    return projectsList;
  }
}
module.exports = new ProjectService();
