const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getUserById = async function (req, res) {
  try {
    const user = await User.findById(req.params.userId);

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getAllUsers = async function (req, res) {
  try {
    const users = await User.find({});

    const result = users.filter((user) => !user.isAdmin);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserByUsername = async function (req, res) {
  try {
    const user = await User.findOne({ username: req.user.username });
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateUser = async function (req, res) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async function (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "successful", user });
  } catch (err) {
    res.status(500).json();
  }
};

module.exports = {
  getUserById,
  updateUser,
  getUserByUsername,
  deleteUser,
  getAllUsers,
};
