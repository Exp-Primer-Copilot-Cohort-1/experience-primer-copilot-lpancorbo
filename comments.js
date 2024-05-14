// Create web server
// Run node comments.js
// Server is listening on port 3000
// Open browser and go to http://localhost:3000

var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello World\n');
});

server.listen(3000, '