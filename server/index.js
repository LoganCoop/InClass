// Initialize the server Logan Cooper


// Load the http module to create an http server.
const http = require('http');
const PORT = 8000;


const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');
});


// Listen on port 8000, IP defaults to
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



console.log("Hello World!");