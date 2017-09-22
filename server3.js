var fs = require('fs');
var http = require('http');
const PORT = 3000;

function handler(request, response) {
  console.log(request.url);
    var url = request.url
    if(url.indexOf('/cat') > -1) {

    response.writeHead(200, {"Content-Type": "text/html"});
    return response.end('<img src="https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu_400x400.jpeg">')
  }
  fs.readFile(__dirname + '/index.html', function (error, index){
    if(error){
      console.error(error);
      return response.end(); //to check if there is an error. this prints out the error. and sends response to the client?
    }; if(!file){
      prompt ('problem with file');
    };
     response.write(index);
     return response.end();
  });
}

http.createServer(handler).listen(PORT);

console.log("I am running");
