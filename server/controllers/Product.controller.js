const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const products = await Product.find({}).limit(10).sort({ rating: -1 });
  res.json({ products });
};

const getProductById = async function (req, res) {
  const product = await Product.findById(req.params.productId);
  res.json({ product });
};

const addProduct = async function (req, res) {
  try {
    const slug = req.body.title.toLowerCase().split(" ").join("-");
    const product = await Product.create({ ...req.body, slug });
    res.status(201).json({ message: "product is created!", product });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProductById = async function (req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ message: "update succesfully", updatedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
};

const productFilter = async function (req, res) {
  try {
    const products = await Product.find(req.body);
    if (!products.length) {
      return res.status(200).json({ message: "No product found" });
    }
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProduct = async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.body.productId);
    if (!product) {
      return res.status(200).json({ message: "No product found" });
    }
    res.status(200).json({ message: "Product is deleted" });
  } catch (err) {
    res.status(500), json(err);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  productFilter,
  deleteProduct,
};
