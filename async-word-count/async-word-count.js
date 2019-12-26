var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  var wordCount = 0;
  fs.readFile(filePathOne, 'utf-8', function(err, data) {
    if(err) {
      callback(err, null);
      return;
    }

    wordCount = data.trim().split(' ').length;

    
  });
  
  fs.readFile(filePathOne, 'utf-8', function(err, data) {
    if(err) {
      callback(err, null);
      return;
    }

    wordCount += data.trim().split(' ').length;
    callback(null, wordCount);
  });

};

module.exports = getTotalWordCount;
