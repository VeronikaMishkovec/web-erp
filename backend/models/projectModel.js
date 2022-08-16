/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  is_current: { type: Boolean },
  is_closed: { type: Boolean },
  name: { type: String },
  created_date: { type: Date },
  closed_date: { type: Date },
  users: { type: Array },
});

module.exports = model("Project", ProjectSchema);
