const express = require("express");
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

const OrderController = require("../controllers/Order.controller");

router
  .route("/")
  .get(verifyTokenAndAdmin, OrderController.getAllOrders)
  .put(verifyTokenAndAdmin, OrderController.updateOrder);

router
  .route("/:userId")
  .get(verifyToken, OrderController.getOrders)
  .post(verifyToken, OrderController.createOrder)
  .put(verifyToken, OrderController.updateOrder);

module.exports = router;
