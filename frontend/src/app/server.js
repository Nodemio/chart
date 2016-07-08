/**
 * Created by neo on 07-07-16.
 */
'use strict';

var express = require('express');
var path = require('path');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/static', express.static(__dirname + '/public'));

app.listen(PORT);
