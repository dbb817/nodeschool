var fileSystemModule = require('fs');
var pathModule = require ('path');

module.exports = function filterAndCallback (dirName, extension, callback)
  {
  function filterList (err, fileList)
    {
    var newFileList = [];
    
	if (err) 
	  return callback (err);
	
    for (listIndex = 0; listIndex < fileList.length; listIndex++)
      {
      var fileName = fileList [listIndex];
      if (pathModule.extname (fileName) === '.' + extension)
        newFileList [newFileList.length] = fileName;
      }
    
    fileList = newFileList;		
    
    callback (null, fileList)
    }
  
  fileSystemModule.readdir (dirName, filterList);  
  }   
  