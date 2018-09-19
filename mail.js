'use strict';

// simple express server
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/test', function (req, res) {
  res.send('Hello world!');
});
