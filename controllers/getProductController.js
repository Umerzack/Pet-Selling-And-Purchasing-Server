const products = require("../data");

function getProductsController(req, res) {
  res.status(200).json({ products });
}

function getProductController(req, res) {
  const { id } = req.params;

  const product = products.find((product) => product.id === parseInt(id));

  return res.status(200).json(product);
}

function getCategoryController(req, res) {
  const { category } = req.params;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return res.status(200).json(filteredProducts);
}

module.exports = {
  getProductController,
  getProductsController,
  getCategoryController,
};
