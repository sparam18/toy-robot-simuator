#!/usr/bin/env node
var clc = require('colors');
var app = require('../index.js');

var fileName = process.argv[2];

if(fileName === 'help') {
	console.log(clc.black.bgGreen('Toy Robot Commands: ') + ' ' + clc.blue('\n PLACE X, Y, DIRECTION \n MOVE \n LEFT \n RIGHT \n REPORT \n help'));
	return false;
}
/**
 * Run the simulation
 */
app.runSimulation(fileName, function(err, robot) {
  // If error, let the user know
  if (err) {
    console.log(clc.white.bgRed('ERROR:') + ' ' + clc.red(err.message));
    return false;
  }

});
