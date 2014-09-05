var httpModule = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var urlsReceived = 0;

var data1 = "";
var data2 = "";
var data3 = "";

function processHttpData1 (stringData)
  {
  data1 += stringData;
  }

function processHttpData2 (stringData)
  {
  data2 += stringData;
  }

function processHttpData3 (stringData)
  {
  data3 += stringData;
  }

function processHttpError (stringError)
  {
  throw stringError;
  }

function processHttpEnd (stringData)
  {
  urlsReceived++;
  if (urlsReceived == 3)
    {
    console.log (data1);
    console.log (data2);
    console.log (data3);
    }
  }

function processHttpResponse1 (responseStream)
  {
  responseStream.on ("data", processHttpData1);
  responseStream.on ("error", processHttpError);
  responseStream.on ("end", processHttpEnd);
  }

function processHttpResponse2 (responseStream)
  {
  responseStream.on ("data", processHttpData2);
  responseStream.on ("error", processHttpError);
  responseStream.on ("end", processHttpEnd);
  }
  
function processHttpResponse3 (responseStream)
  {
  responseStream.on ("data", processHttpData3);
  responseStream.on ("error", processHttpError);
  responseStream.on ("end", processHttpEnd);
  }
  
httpModule.get (url1, processHttpResponse1);
httpModule.get (url2, processHttpResponse2);
httpModule.get (url3, processHttpResponse3);

