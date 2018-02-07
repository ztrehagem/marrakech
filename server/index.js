const http = require('http');

http.createServer((req, resp) => {
  console.log('request');
  resp.writeHead(200);
  resp.end('Hello World');
}).listen(process.env.PORT || 8080);

console.log('listening');
