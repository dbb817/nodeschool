var filterModule = require ('./filtermodule.js');

dirName = process.argv [2];
extension = process.argv [3];

function printList (err, fileList)
  {
  if (err) throw error;
  
  for (stringIndex = 0; stringIndex < fileList.length; stringIndex++)
    {
    var fileName = fileList[stringIndex];
    
    console.log (fileName);
    }
  }

filterModule (dirName, extension, printList)