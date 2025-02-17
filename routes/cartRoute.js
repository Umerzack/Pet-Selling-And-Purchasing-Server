const express = require("express");
const router = express.Router();

const {
  addProductController,
  deleteProductController,
} = require("../controllers/cartController");

router.post("/", addProductController);

router.post("/delete", deleteProductController);

module.exports = router;
