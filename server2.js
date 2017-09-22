var fs = require('fs');
var http = require('http');
const PORT = 3000;

function handler(request, response) {
  //display "HELLO WORLD" when the user is on the home page
  fs.readFile(__dirname + '/index.html', function callback(error, index) {
    response.write(index);
    response.end();
  });

}

http.createServer(handler).listen(PORT);

console.log("I am running");
