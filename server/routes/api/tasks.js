const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const dbUrl = ""


// Get Posts
router.get('/', (req, res) => {
  res.send('hello world');
})

// Add Post

// Delete Post

module.exports = router;
