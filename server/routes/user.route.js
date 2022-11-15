const express = require("express");
const UserController = require("../controllers/User.controller");
const CartController = require("../controllers/Cart.controller");
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken");

const router = express.Router();

router
  .route("/")
  .get(verifyTokenAndAdmin, UserController.getAllUsers)
  .delete(
    verifyTokenAndAdmin,
    CartController.deleteCart,
    UserController.deleteUser
  );

router
  .route("/:userId")
  .get(verifyTokenAndAdmin, UserController.getUserByUsername);

router
  .route("/:username")
  .get(verifyToken, UserController.getUserByUsername)
  .put(verifyToken, UserController.updateUser);

module.exports = router;
