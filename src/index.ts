import * as http from "http";

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end("Server is running!");
});

server.listen(3000);
console.log(`Listening on port 3000!`);
