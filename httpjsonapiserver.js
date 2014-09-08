var httpModule = require('http');
var urlModule = require('url');

function parsetime (timeUrl)
    {
    if (timeUrl.query.hasOwnProperty("iso"))
      {
      var date = new Date (timeUrl.query.iso);

      var returnDate = { "hour" : date.getHours(),
                         "minute" : date.getMinutes(),
                         "second" : date.getSeconds()
                       };

      return JSON.stringify (returnDate);
      }
    }

function unixtime (unixTimeUrl)
    {
    if (unixTimeUrl.query.hasOwnProperty("iso"))
        {
        var date = new Date(unixTimeUrl.query.iso);

        var returnDate = { "unixtime" : date.getTime()
            };

        return JSON.stringify(returnDate);
        }
    }

function handleRequest (request, response)
  {
  //determine if this is a GET request
  if (request.method !== "GET")
    return;

  var url = urlModule.parse (request.url, true);

  if (url.pathname === "/api/parsetime")
    responseString = parsetime (url);
  else if (url.pathname === "/api/unixtime")
    responseString = unixtime (url);
  else
    return;

  //create a JSON object to return
  JSON.stringify();
  response.writeHead (200, { 'Content-Type': 'application/json'});
  response.end (responseString);
  }


var httpServer = httpModule.createServer (handleRequest);
httpServer.listen (Number(process.argv[2]));

