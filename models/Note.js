const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the title"],
    unique: true,
    maxlength: [40, "Title cannot exceed 40 characters"],
  },
  description: {
    type: String,
    required: [true],
    unique: true,
    maxlength: [200, "Description cannot exceed 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
