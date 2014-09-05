var fileSystemModule = require('fs');

var filePath = process.argv[2];

var fileBuffer = fileSystemModule.readFileSync(filePath);

var fileString = fileBuffer.toString();

var stringArray = fileString.split ('\n');

console.log(stringArray.length - 1);
