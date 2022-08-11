/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express").Router;

const userController = require("../controllers/userController");

const router = new Router();

router.get("/info", userController.userInfo);

module.exports = router;
