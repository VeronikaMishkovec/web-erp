/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  name: { type: String },
  title: { type: String },
  timing: { type: Array },
  project_id: { type: String },
});

module.exports = model("Task", TaskSchema);
