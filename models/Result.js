const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  results: []
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
