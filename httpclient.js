var httpModule = require('http');

var url = process.argv[2];

function processHttpResponse (responseStream)
  {
  responseStream.setEncoding ("utf8");

  function processHttpData (stringData)
    {
    console.log (stringData);
    }
    
  function processHttpError (stringError)
    {
    throw stringError;
    }
    
  function processHttpEnd (stringData)
    {
    }

  responseStream.on ("data", processHttpData);
  responseStream.on ("error", processHttpError);
  responseStream.on ("end", processHttpEnd);
  }


httpModule.get (url, processHttpResponse);

