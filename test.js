var http = require ('http');
var server = http.createServer ();
server.on ('request', function (req, res) {
  res.writeHead (200);
  res.end ('Salut tout le monde !');
}).listen (8080);