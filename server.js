var express = require('express');
var app = express();

// BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers')); // Authomatically finds index.js
app.use(express.static('client/build')); // So do not need get ('/') route deinfition in index.js - check this

app.listen(3000, function(){
  console.log('App is running on port ' + this.address().port);
});