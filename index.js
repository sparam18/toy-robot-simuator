var Robot = require('./lib/Robot');
var CommandFileReader = require('./lib/CommandFileReader');
var CommandParser = require('./lib/CommandParser');

/**
 * Set up instances for usage
 */
var robot = new Robot();
var cmdFileReader = new CommandFileReader();
var parser = new CommandParser();

/**
 * Application module
 */
var app = {};

/**
 * Read and parse file name
 * @param {String} fileName File to read and parse
 * @param {Function} cb Callback function
 */
app.readAndParseFile = function(fileName, cb) {
  cmdFileReader.readInputFile(fileName, function(err, fileData) {
    if (err) {
      cb(err);
      return false;
    }

    parser.parseArgs(fileData, function(err, instructionList) {
      if (err) {
        cb(err);
        return false;
      }

      cb(null, instructionList);
    })
  });
};

/**
 * Run simulation using input file
 * @param {String} fileName File to run the simulation on
 * @param {Function} cb Callback function
 */
app.runSimulation = function(fileName, cb) {
  this.readAndParseFile(fileName, function(err, instructionList) {
    if (err) {
      cb(err);
      return false;
    }

    robot = robot.runInstructions(instructionList);
    cb(null, robot);
  });
};

module.exports = app;