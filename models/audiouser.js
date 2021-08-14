const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const useraudioSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  audiolink: {
    type: String,
    required: true
  },
  conversationId: {
    type: String,
    required: true
  },
  jobId: {
    type: String,
    required: true
  },
  sentiment: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
});
module.exports = useraudioSchema;