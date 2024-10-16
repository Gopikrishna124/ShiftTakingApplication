const Shift = require("../../models/Shiftmodel").module;

const addClockOut = async (req, res) => {
  const id = req.params.id;
  const { time, coords, accuracy } = req.body;

  try {
    if ((time, coords, accuracy)) {
      const result = await Shift.findByIdAndUpdate(id, {
        $push: { clockOut: time, coords, accuracy },
      });

      res.json({
        data: result,
        message: "clock Out added successfully",
        success: true,
        error: false,
      });
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
};

exports.module = addClockOut;
