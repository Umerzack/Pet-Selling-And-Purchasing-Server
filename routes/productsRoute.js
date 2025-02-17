const express = require("express");
const router = express.Router();

const {
  getProductsController,
  getProductController,
  getCategoryController,
} = require("../controllers/getProductController");

router.get("/", getProductsController);

router.get("/product/:id", getProductController);

router.get("/category/:category", getCategoryController);

module.exports = router;
