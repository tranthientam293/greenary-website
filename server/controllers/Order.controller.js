const Order = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createOrder = async (req, res) => {
  try {
    const respone = await Order.create({
      userId: req.user.id,
      products: req.body.products,
      address: req.body.address,
      totalPayment: req.body.totalPayment,
    });

    res.status(201).json(respone);
  } catch (err) {
    res.json(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.body.id, {
      $set: {
        status: req.body.status,
      },
    });

    res.status(200).json({ message: "sucess", order });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getOrders, createOrder, getAllOrders, updateOrder };
