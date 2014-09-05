var fileSystemModule = require('fs');
var pathModule = require ('path');

var dirName = process.argv[2];
var filterString = '.' + process.argv[3]

function printFilteredList (err, fileList)
  {
  if (err) throw error;
  
  for (stringIndex = 0; stringIndex < fileList.length; stringIndex++)
    {
    var fileName = fileList[stringIndex];
    
    if (pathModule.extname (fileName) == filterString)
      console.log (fileName);

    }
  }
  
fileSystemModule.readdir (dirName, printFilteredList);


