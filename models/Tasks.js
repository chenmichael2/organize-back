const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Schema
const TaskSchema = new Schema({
  task: String,
  checked: Boolean,
  date: {
    type: Date,
    default: Date.now()
  },
  dateDue: {
    type: Date,
  }
});

module.exports = Task = mongoose.model('Task', TaskSchema);