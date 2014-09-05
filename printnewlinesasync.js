var fileSystemModule = require('fs');

var filePath = process.argv[2];

function countNewLines (err, fileString)
  {
  if (err) throw error;
  
  console.log (fileString.split('\n').length - 1);
  }
  
fileSystemModule.readFile (filePath, 'utf8', countNewLines);


