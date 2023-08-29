'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
global.__baseDir = __dirname;

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin: *");
    // res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authentication-token, application/json,charset=utf-8");
    next();
});



require('dotenv').config();
require('./config/db.mongoose');
require('./config/routes')(app);
require('./config/errorHandler')(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
