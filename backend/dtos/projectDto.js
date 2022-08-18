module.exports = class ProjectDto {
  status;
  name;
  created_date;
  closed_date;
  id;

  constructor(model) {
    this.status = model.status;
    this.name = model.name;
    this.created_date = model.created_date;
    this.closed_date = model.closed_date;
    this.id = model._id;
  }
};
