var express = require('express');
var path = require('path');
var router = express.Router();


function solution() {
  var lines = require('fs').readFileSync('input/two.txt', 'utf-8')
    .split('\n')
    .filter(Boolean);
  let twos = 0;
  let threes = 0;


  lines.forEach( (line) => {
    const letters = line.split('');
    let letterMap = {}

    // Get counts for all letters
    letters.forEach( (letter) => {
      letterMap[letter] = letterMap[letter] ? letterMap[letter] + 1 : 1;
    });
    
    // Get count of lines with exactly two or three of any letter
    containsTwo = false;
    containsThree = false;
    for (let letter in letterMap) {
      if (letterMap[letter] == 2 && !containsTwo) {
        twos++;
        containsTwo = true;
      } else if (letterMap[letter] == 3 && !containsThree) {
        threes++;
        containsThree = true;
      }
    }
  });
  
  return (twos * threes) + '';
}

router.get('/', function(req, res, next) {
  res.send(solution());
});

module.exports = router;
