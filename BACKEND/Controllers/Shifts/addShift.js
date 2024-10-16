const Shift = require("../../models/Shiftmodel").module;
const sendShiftAssignment =
  require("../../EmailService/ShiftAssignment").module;

const addShift = async (req, res) => {
  try {
    const shift = new Shift(req.body);
    const result = await shift.save();
    if (req.body.staffEmail) {
      await sendShiftAssignment(
        req.body.location,
        req.body.date,
        req.body.time,
        req.body.type,
        req.body.duration,
        req.body.client,
        req.body.staffEmail,
        req.body.notes
      );
    }
    res.json({
      data: result,
      message: "shift added successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
};

exports.module = addShift;
