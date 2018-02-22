'use strict';

const express = require('express');
const pjson = require('./package.json');

var app = express();

const PORT = process.env.PORT || 8081;
const HOST = "0.0.0.0";

app.use('/', express.static('dist'));

var server = app.listen(PORT, HOST);
console.log('listening on port : '+PORT);

module.exports = server; // for testing