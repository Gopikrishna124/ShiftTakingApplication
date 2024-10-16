const mongoose = require("mongoose");
const { Schema } = mongoose;

const usermodel = new Schema({
  userName: { type: String },
  fullName: { type: String, requried: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  gender: { type: String },
  staffId: { type: String,required:true,unique:true },
  password: { type: String, required: true},
  role: { type: String, default: "user" },
  documents: { type: Array },
  isActive: { type: String, default: "Yes" },
  img: { type: String },
},{timestamps:true});

const User = mongoose.model("User", usermodel);
exports.module = User;
