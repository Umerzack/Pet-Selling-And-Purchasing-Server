const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  userExist,
} = require("../controllers/authController");

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/userExist", userExist);

module.exports = router;
