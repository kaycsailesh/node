'use strict';
// Import the interface to Tessel hardware
const tessel = require('tessel');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const mountPoint = '/mnt/sda1';
const http = require('http').createServer(app);

app.use('/static', express.static(mountPoint));

app.get('/*', function(req, res) {
  res.send('This is a test');
})

app.get('/', function(req, res) {
  fs.readdir(mountPoint, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

http.listen(80,function() {
  console.log('I am listening on 80');
})

// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(() => {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

// console.log("I'm blinking! (Press CTRL + C to stop)");
