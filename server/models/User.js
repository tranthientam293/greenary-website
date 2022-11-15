const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    isAdmin: { type: Boolean, default: false },
    age: { type: Number },
    gender: { type: String, default: "Other" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
