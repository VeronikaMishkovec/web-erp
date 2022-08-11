module.exports = class UserInfoDto {
  email;
  id;
  current_project;
  projects_list;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.current_project = model.current_project;
    this.projects_list = model.projects_list;
  }
};
