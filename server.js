'use strict';

const express = require('express');
const pjson = require('./package.json');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello world running version '+pjson.version+'\n');
});

app.listen(PORT, HOST);