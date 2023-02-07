const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
});

const toDo = mongoose.model("toDo", schema);

module.exports = toDo;
