var fs = require('fs');

var fileContents = fs.readFileSync('names.txt', 'utf-8');
var arrayOfLines = fileContents.split('\n');
var reversedArrayOfLines = arrayOfLines.reverse();
var joinedReversedString = reversedArrayOfLines.join('\n');

fs.writeFileSync('names-reversed.txt', joinedReversedString, 'UTF-8');

for (let i = 0; i < arrayOfLines.length; i++) {
    fs.writeFileSync(arrayOfLines[i] + '-reversed.txt', arrayOfLines[i].split('').reverse().join(''), 'UTF-8');
  }