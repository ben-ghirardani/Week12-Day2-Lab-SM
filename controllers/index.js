var express = require('express');
var router = express.Router();
var path = require('path');

// ACTION: Is 'api/animals' correct?
router.use('/api/animals', require('./animals'));

// Main route; sends back HTML to the browser when http://localhost:3000/
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;