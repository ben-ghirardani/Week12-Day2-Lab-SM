var express = require('express');
var animalsRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

// Define here so wounonly have to connect to the db once.
// Better than having to connect with every operation
MongoClient.connect('mongodb://localhost:27017/farm', function(err, database){
  if (err) return;
  db = database;
});

// animals INDEX
animalsRouter.get('/', function(req, res){
  // Get animals from DB and send back to client.
  db.collection('animals').find().toArray(function(err, results){
    if (err) console.log('Opps' + err.toString());
    res.json(results);
  });
});

// SHOW

// EDIT

// UPDATE

// CREATE
animalsRouter.post('/', function(req, res){
  console.log(req.body);
  db.collection('animals').insertOne(req.body, function(err, response){
    //res.redirect('/api/animals');
    res.json(response);
  });
});

// DELETE

module.exports = animalsRouter;