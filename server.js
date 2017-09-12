var express = require('express');
var app = express();

app.use(require('./controllers')); // Authomatically finds index.js
app.use(express.static('client/build'));

app.listen(3000, function(){
  console.log('App is running on port ' + this.address().port);
});