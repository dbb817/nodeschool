var httpModule = require('http');
var fileSystemModule = require('fs');

function handleRequest (request, response)
  {
  var readStream = fileSystemModule.createReadStream (process.argv[3]);

  readStream.pipe(response);
  }

var httpFileServer = httpModule.createServer (handleRequest);
httpFileServer.listen (Number (process.argv[2]));

