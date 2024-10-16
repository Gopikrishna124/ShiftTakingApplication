const ejs = require("ejs");
const dotenv = require("dotenv").config();
const path = require("path");
const sendMail = require("../helpers/sendEmail").module;

const sendShiftAssignment = async (
  location,
  date,
  time,
  type,
  duration,
  client,
  email,
  notes
) => {
  ejs.renderFile(
    "templates/ShiftAssignment.ejs",
    { location, date, time, type, duration, client, notes },
    async (err, data) => {
      let messageOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "You have a new Shift",
        html: data,
      };
      try {
        await sendMail(messageOptions);
      } catch (err) {
        console.log(err);
      }
    }
  );
};

exports.module = sendShiftAssignment;
