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
router.post("/refresh", userController.refresh);

module.exports = router;
