'use strict';

var fs = require('fs');

module.exports = (function() {
  var env = process.env.NODE_ENV || 'dev';
  var file = '.env.' + env;

  if (env === 'production') {
    return;
  }

  fs.readFileSync(file).toString().split('\n').forEach(function(line) {
    var lineArray = line.split(/\=(.+)?/);
    var key = lineArray[0];
    var value = (lineArray[1] ? lineArray[1] : '');

    process.env[key] = process.env[key] || value;
  });
}());
