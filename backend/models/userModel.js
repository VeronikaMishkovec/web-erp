/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  projects_list: { type: Array },
});

module.exports = model("User", UserSchema);
