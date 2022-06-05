if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
};

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // parse json data
const cors = require('cors');
const dbUrl = process.env.DB_URL;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(dbUrl)
  .then(() => {
    console.log('DB Connected via Mongoose!')
  })
  .catch(err => console.log(err));

const TasksRoute = require('./server/routes/tasks');
app.use('/tasks', TasksRoute);


// Production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/dist/'))

  // Handle SPA routes
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
  })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));