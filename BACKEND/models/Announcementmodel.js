const mongoose = require("mongoose");
const { Schema } = mongoose;

const announcementmodel = new Schema(
  {
    title: { type: String },
    description: { type: String },
    time: { type: String },
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementmodel);
exports.module = Announcement;
