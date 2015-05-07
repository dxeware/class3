var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  if (request.url === '/' || request.url === '/index.html') {
    fs.readFile('./index.html', function(error, content){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    });
  } else if (request.url === '/data') {
    response.end(JSON.stringify({ name: 'laura'}));
  }
  else {
      response.end('It works! Path hit: ' + request.url);
  }
} );

var PORT = 8080;

server.listen(PORT, function() {
  console.log("SErver listening on http://localhost:%s", PORT);
});
