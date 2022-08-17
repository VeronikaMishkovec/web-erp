/* eslint-disable @typescript-eslint/no-var-requires */

const UserDto = require("../dtos/userDto");
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
    const projectTeamMember = new UserDto(user);

    const newProject = await ProjectModel.create({
      is_current: true,
      is_closed: false,
      name,
      created_date: date,
      closed_date: null,
      users: [projectTeamMember],
    });

    await UserModel.findByIdAndUpdate(user._id, {
      projects_list: [...user.projects_list, newProject],
    });

    return newProject;
  }
}
module.exports = new ProjectService();
