const mongoose = require("mongoose");

const orphanageSchema = new mongoose.Schema(
  {
    orphanagename: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    ContactNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orphanage", orphanageSchema);
