var express = require('express');
var path = require('path');
var app = express();
app.use('/bower_components', express.static(__dirname, '../bower_components'));

module.exports = app;