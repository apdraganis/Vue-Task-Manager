const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
  text: String,
  deadline: String,
  priority: Boolean
})

module.exports = mongoose.model('Task', TaskSchema);