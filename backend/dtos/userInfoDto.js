module.exports = class UserInfoDto {
  email;
  id;
  projects_list;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.projects_list = model.projects_list;
  }
};
