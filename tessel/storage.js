'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');
const http = require('http');
const fs = require('fs');
const path = require('path');
const mountPoint = '/mnt/sda1';
const filepath = path.join(mountPoint, 'myFile.txt');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plan'});
  res.end('Hello from Skpixel');
})

server.listen(8080);

var text = 'Hello Tessel';

fs.writeFile(filepath, text, function() {
  console.log('Wrote ', text, ' to ', filepath, 'on USB');
})

fs.readFile(filepath, function(err, data) {
  console.log('Read ', data.toString(), ' from USB');
})

// Turn one of the LEDs on to start.
tessel.led[3].on();
//
// // Blink!
// setInterval(() => {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);
//
// console.log("I'm blinking! (Press CTRL + C to stop)");
