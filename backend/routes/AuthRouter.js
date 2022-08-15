/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express").Router;
const { body } = require("express-validator");

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.get("/refresh", userController.refresh);
router.post("/logout", userController.logout);

module.exports = router;
