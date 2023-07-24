const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  task: { type: String, required: true },
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
