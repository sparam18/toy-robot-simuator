var fs = require('fs');

/**
 * FileReader constructor
 * @constructor
 */
var CommandFileReader = function() {};

/**
 * Read input file
 * @param {String} fileName Input file name
 * @param {Function} cb Callback function
 */
CommandFileReader.prototype.readInputFile = function(fileName, cb) {

  // Validate input
  this.validateInput(fileName, function(err, validatedFileName) {
    if (err) {
      cb(err);
      return false;
    }

    // Read file into memory if valid
    fs.readFile(validatedFileName, { encoding: 'utf-8' }, function(err, fileData) {
      if (err) {
        cb(new ReferenceError('Command File doesn\'t exist or cannot be accessed'));
        return false;
      }

      // If contents are empty, throw an error
      if (!fileData.length) {
        cb(new RangeError('Command File content cannot be empty'));
        return false;
      }

      cb(null, fileData);
    });
  });


};

/**
 * Validate input file name
 * @param {String} argString Input string to validate
 * @param {Function} cb Callback function
 */
CommandFileReader.prototype.validateInput = function(argString, cb) {
  if(!argString){
    cb(new TypeError('Toy Robot Simulator requires a valid .txt command file'));
    return false;
  }
  var splitArray = argString.split('.');
  var len = splitArray.length;

  // Rudimentary check to see if file has an extension
  if (len === 1 && splitArray[0] === argString) {
    cb(new TypeError('Toy Robot Simulator requires a valid .txt command file'));
    return false;
  }

  // Only allow .txt files as input
  if (splitArray[len - 1] !== 'txt') {
    cb(new TypeError('Toy Robot Simulator only accepts .txt files'));
    return false;
  }

  cb(null, argString);

};

module.exports = CommandFileReader;