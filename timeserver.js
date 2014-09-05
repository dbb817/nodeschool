var netModule = require('net');

function handleConnection (socket)
  {
  var date = new Date();

  var timeStr = date.getFullYear().toString() + '-';

  var month = date.getMonth() + 1;
  if (month < 10)
    timeStr += '0';
  timeStr += month.toString() + '-';

  var day = date.getDate();
  if (day < 10)
    timeStr += '0';
  timeStr += day.toString() + ' ' + date.getHours().toString() + ':' + date.getMinutes().toString() + '\n';

  socket.end (timeStr, 'utf8');
  }


var timeServer = netModule.createServer (handleConnection);
timeServer.listen (Number(process.argv[2]));

