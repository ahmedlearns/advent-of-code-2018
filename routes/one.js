var express = require('express');
var path = require('path');
var router = express.Router();


function solution() {
  let sum = 0;  
  var lines = require('fs').readFileSync('input/one.txt', 'utf-8')
    .split('\n')
    .filter(Boolean);

  let previousValues = {};
  let foundRepeat = false;
  while (!foundRepeat) {
    lines.some((line) => {
      sum = sum + parseInt(line);
      if (previousValues[sum] != undefined) {
        foundRepeat = true;
        console.log('Found first repeat: ', previousValues[sum]);
      } else {
        previousValues[sum] = sum;
      }
      return foundRepeat;
    });
  }
  return sum + '';
}

router.get('/', function(req, res, next) {
  res.send(solution());
});

module.exports = router;
