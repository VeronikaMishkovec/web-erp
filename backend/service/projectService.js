/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");

const UserDto = require("../dtos/userDto");
const UserInfoDto = require("../dtos/userInfoDto");
const ApiError = require("../exeptions/apiError");
const ProjectModel = require("../models/projectModel");
const UserModel = require("../models/userModel");
const tokenService = require("../service/tokenService");

class ProjectService {
  async createProject(name, email) {
    const project = await ProjectModel.findOne({ name });
    const user = await UserModel.findOne({ email });

    if (project) {
      throw ApiError.BadRequest(`Project ${name} is already exist`);
    }

    const date = new Date();
    const projectTeamMember = new UserInfoDto(user);

    const newProject = await ProjectModel.create({
      is_current: true,
      is_closed: false,
      name,
      created_date: date,
      closed_date: null,
      users: [projectTeamMember],
    });

    return newProject;
  }
}
module.exports = new ProjectService();
