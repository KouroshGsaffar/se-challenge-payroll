var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const morgan = require('morgan');

// setup morgan as logger to log request details
app.use(morgan('dev'));

// adding middleware for parsing bodies from URL and parsing json objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;
  
app.get('/',(req,res) => {
    res.send('Welcome Page');
})
  
var PORT = process.env.PORT || 3001;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})