const express = require("express");

const ProductController = require("../controllers/Product.controller");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = express.Router();

router
  .route("/")
  .get(ProductController.productFilter)
  .post(verifyTokenAndAdmin, ProductController.addProduct)
  .delete(verifyTokenAndAdmin, ProductController.deleteProduct);

router.route("/all").get(ProductController.getAllProducts);

router
  .route("/:productId")
  .get(ProductController.getProductById)
  .put(verifyTokenAndAdmin, ProductController.updateProductById);

module.exports = router;
