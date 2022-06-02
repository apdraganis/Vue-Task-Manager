const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const dbUrl = "mongodb+srv://first-user:8yDNyd0ScGUWSKjJ@cluster0.msahg.mongodb.net/Project0?retryWrites=true&w=majority";


// Get Posts
router.get('/', (req, res) => {
  res.send('hello world');
})

// Add Post

// Delete Post

module.exports = router;