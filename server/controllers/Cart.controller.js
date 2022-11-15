const e = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ userId: req.user._id });
    res.status(201).json({ message: "success", user: req.body, cart });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCartDetail = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    const condition = cart.products;
    const result = [];
    if (!condition) {
      res.status(200).json({ result });
    }

    for (let el of condition) {
      const product = await Product.findById(el.productId).exec();
      if (product) {
        result.push({ ...product._doc, quantity: el.quantity });
      } else {
        result.push(el);
      }
    }
    res.status(200).json({ result });
  } catch (err) {
    res.json(err);
  }
};

const addToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (
      cart.products.find((item) => item.productId == req.body.productId) == null
    ) {
      cart.products = [...cart.products, req.body];
    } else {
      cart.products = cart.products.map((item) => {
        if (item.productId == req.body.productId) {
          return { ...item, quantity: item.quantity + req.body.quantity };
        } else {
          return item;
        }
      });
    }
    await cart.save();
    res.status(200).json({ message: "Item is added", cart });
  } catch (error) {
    res.json(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    const product = req.body;

    if (!product.quantity) {
      cart.products = cart.products.filter(
        (item) => item.productId != product.productId
      );
    } else {
      cart.products = cart.products.map((item) => {
        if (item.productId == product.productId) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
    }

    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOneAndDelete({ userId: req.user.id });
    if (cart) {
      next();
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getCartDetail,
  addToCart,
  updateCart,
  createCart,
  deleteCart,
};
