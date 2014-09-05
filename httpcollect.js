var httpModule = require('http');

var url = process.argv[2];

var data = "";

function processHttpResponse (responseStream)
  {
  responseStream.setEncoding ("utf8");

  function processHttpData (stringData)
    {
	data += stringData;
    }
    
  function processHttpError (stringError)
    {
    throw stringError;
    }
    
  function processHttpEnd (stringData)
    {
    console.log (data.length);
	console.log (data);
    }

  responseStream.on ("data", processHttpData);
  responseStream.on ("error", processHttpError);
  responseStream.on ("end", processHttpEnd);
  }


httpModule.get (url, processHttpResponse);

