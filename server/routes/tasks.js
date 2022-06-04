const { faShop } = require('@fortawesome/free-solid-svg-icons');
const express = require('express');
const router = express.Router();
// const mongodb = require('mongodb');
const Task = require('../models/task');

// All Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
// Create Task
router.post('/new', async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
});
// Get one task
router.get('/:id', async (req, res) => {
  const task = await Task.findById({ _id: req.params.id });
  res.json(task);
});
// Delete Task
router.delete('/delete/:id', async (req, res) => {
  const result = await Task.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
});
router.put('/update/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate({ _id: req.params.id }, { $set: { ...req.body, } })
  task.priority = !task.priority;
  await task.save();
  res.json(task)
})

module.exports = router;