var http = require('http');
const PORT = 3000;

function handler(request, response) {
  //display "HELLO WORLD" when the user is on the home page
  var url = request.url;
  if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("HELLO WORLD!");
  }
}

http.createServer(handler).listen(PORT);

console.log("I am running");
