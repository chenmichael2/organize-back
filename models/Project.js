const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Project Schema
const ProjectSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  projectName: {type: String,},
  date: {
    type: Date,
    default: Date.now()
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task'}],
});

module.exports = Project = mongoose.model('Project', ProjectSchema);