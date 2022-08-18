/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  status: { type: String },
  name: { type: String },
  created_date: { type: Date },
  closed_date: { type: Date },
  user_id: { type: String },
});

module.exports = model("Project", ProjectSchema);
