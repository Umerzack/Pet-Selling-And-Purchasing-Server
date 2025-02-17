function addProductController(req, res) {
  const products = req.body;
  console.log("Products in add product controller", products);

  return res.status(200).json({ message: "Product added successfully" });
}

function deleteProductController(req, res) {
  console.log("Product deleted successfully", req.body);

  return res.status(200).json({ message: "Product deleted successfully" });
}

module.exports = { addProductController, deleteProductController };
