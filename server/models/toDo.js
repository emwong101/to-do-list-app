const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  categories: {
    type: Array,
  },
});

const toDo = mongoose.model("toDo", schema);

module.exports = toDo;
