'use strict';

const express = require('express');
const pjson = require('./package.json');

var app = express();

const PORT = process.env.SERVER_PORT || 8081;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {
  res.send('Hello world running version '+pjson.version+'\n');
});

var server = app.listen(PORT, HOST);
console.log('listening on port : '+PORT);

module.exports = server; // for testing