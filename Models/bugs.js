const mongoose = require("mongoose");
const bugSchema = new mongoose.Schema({
  bugTitle: {
    type: String,
    required: true,
  },
  bugStatus: {
    type: String,
    required: true,
  },
  bugDesc: {
    type: String,
    required: true,
  },
  bugLink: {
    type: String,
  },
  bugUserDevice: {
    type: String,
    required: true,
  },
  Assignedto: {
    type: String,
  },
  priority: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
  },
});
module.exports = mongoose.model("bugs", bugSchema);
