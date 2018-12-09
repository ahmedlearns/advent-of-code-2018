var express = require('express');
var path = require('path');
var router = express.Router();


function solution() {
  let sum = 0;  
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input/one.txt')
  });
  lineReader.on('line', function (line) {
    console.log('Line from file:', line);
    console.log('parseInt: ', parseInt(line));
    console.log('\n');
    sum = sum + parseInt(line);
    console.log(sum);
  });

  lineReader.on('close', () => { return sum; });
}


router.get('/', function(req, res, next) {
  res.send(solution());
});

module.exports = router;
