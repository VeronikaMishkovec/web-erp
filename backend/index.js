/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", router);

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
