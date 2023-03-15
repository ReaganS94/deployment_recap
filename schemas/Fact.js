const mongoose = require("mongoose");

const { Schema } = mongoose;

const factSchema = new Schema(
  {
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("fact", factSchema);
