const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 1,
    },
    data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Data", dataSchema);
