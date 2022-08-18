const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const useSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
