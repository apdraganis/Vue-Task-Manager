const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const dbUrl = "mongodb+srv://<user>:<pass>@cluster0.msahg.mongodb.net/<projectname>?retryWrites=true&w=majority";

loadTasksCollection = async (sucessCallback) => {
  mongodb.MongoClient.connect(dbUrl, (err, dbInstance) => {
    const dbObject = dbInstance.db('test');
    const dbCollection = dbObject.collection('tasks');
    console.log("[MongoDB connection] SUCCESS");
    sucessCallback(dbCollection);
  });
}

// Get Tasks
router.get('/', async (req, res) => {
  await loadTasksCollection((dbCollection) => {
    dbCollection.find().toArray((err, result) => {
      res.send(result);
    })
  })
})

// Add Task
router.post('/', async (req, res) => {
  const newTask = {
    text: req.body.text,
    deadline: req.body.deadline,
    priority: false,
  }
  await loadTasksCollection((dbCollection) => {
    dbCollection.insertOne(newTask)
  })
  res.json(newTask);
});

// Delete Task
router.delete("/:id", async (req, res) => {
  await loadTasksCollection((dbCollection) => {

    dbCollection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });

  });

  res.status(200).send();

});

module.exports = router;
