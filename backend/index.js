/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const errorMiddleware = require("./middlewares/errorMiddleware");
const authRouter = require("./routes/AuthRouter");
const projectsRouter = require("./routes/ProjectsRouter");
const taskRouter = require("./routes/TasksRouter");
const userRouter = require("./routes/UserRouter");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", taskRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
