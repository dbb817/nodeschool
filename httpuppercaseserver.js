var httpModule = require('http');
var t2mapModule = require('through2-map');

var fileSystemModule = require('fs');

function upperChunk (chunk)
  {
  return chunk.toString().toUpperCase();
  }

function handleRequest (request, response)
  {
  if (request.method === "POST")
    request.pipe(t2mapModule(upperChunk)).pipe(response);
  }

var httpFileServer = httpModule.createServer (handleRequest);
httpFileServer.listen (Number (process.argv[2]));

