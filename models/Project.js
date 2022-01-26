const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Project Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },

});

module.exports = Project = mongoose.model('Project', ProjectSchema);