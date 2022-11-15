const express = require("express");
const { verifyToken } = require("./verifyToken");
const router = express.Router();

const CartController = require("../controllers/Cart.controller");

router
  .route("/")
  .get(verifyToken, CartController.getCartDetail)
  .post(verifyToken, CartController.addToCart)
  .put(verifyToken, CartController.updateCart);
module.exports = router;
