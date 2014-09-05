var httpModule = require('http');

var urlsReceived = 0;
var urlData = ["", "", ""];


function processHttpError (stringError)
  {
  throw stringError;
  }

function processHttpEnd (stringData)
  {
  urlsReceived++;
  if (urlsReceived == 3)
    {
    console.log (urlData[0]);
    console.log (urlData[1]);
    console.log (urlData[2]);
    }
  }


function httpGet (index) 
  {
  function processHttpData (stringData)
    {
    urlData[index] += stringData;
    }

  function processHttpResponse (responseStream)
    {
    responseStream.on ("data", processHttpData);
    responseStream.on ("error", processHttpError);
    responseStream.on ("end", processHttpEnd);
    responseStream.setEncoding ("utf8");
    }

  httpModule.get (process.argv[2 + index], processHttpResponse);
  }  

for (var i = 0; i < 3; i++)
  {
  httpGet (i);
  }
