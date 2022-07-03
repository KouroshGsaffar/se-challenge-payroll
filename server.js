require("dotenv").config();

// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router= require('./routes.js')

// setup morgan as logger to log request details
app.use(morgan('dev'));

// adding middleware for parsing bodies from URL and parsing json objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup router
app.use("/", router);

// catch-all route ERROR
router.get('*', (req, res) => res.status(404).json({
    message: 'Error - Not found'
  }));
  
app.listen(process.env.PORT,() => {
    console.log(`Running on PORT ${process.env.PORT}`);
})