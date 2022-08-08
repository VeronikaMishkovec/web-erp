/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("config");
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started on port ", PORT));
    await mongoose.connect(config.get("dbURL"));
    // eslint-disable-next-line no-empty
  } catch (e) {}
};

start();
