const mongoose = require("mongoose");

const { Schema } = mongoose;

const clientmodel = new Schema({
  fullName: { type: String, requried: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  gender: { type: String },
  DOB: { type: String },
  ndisNo: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: { type: String },
  role: { type: String, default: "Client" },
  password: { type: String },
  documents: { type: Array },
  isActive: { type: String, default: "Yes" },
  img: { type: String },
},{timestamps:true});

const Client = mongoose.model("Client", clientmodel);
exports.module = Client;
