const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // parse json data
const cors = require('cors');
const dbUrl = "";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(dbUrl)
  .then(() => {
    console.log('DB Connected via Mongoose!')
  })
  .catch(err => console.log(err));

const TasksRoute = require('./routes/tasks');
app.use('/tasks', TasksRoute);




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));