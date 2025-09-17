const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from Fargate v1\n');
});
server.listen(port, () => console.log(`listening on ${port}`));
