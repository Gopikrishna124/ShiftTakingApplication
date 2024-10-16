const Shift = require("../../models/Shiftmodel").module;

const addCasenotes = async (req, res) => {
  const id = req.params.id;
  const { event, time, notes } = req.body;
  try {
    if ((event, time, notes)) {
      const result = await Shift.findByIdAndUpdate(id, {
        $push: { casenotes: event, time, notes },
      });

      res.json({
        data: result,
        message: "casenotes added successfully",
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

exports.module = addCasenotes;
