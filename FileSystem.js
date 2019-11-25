var fileSystem = require('fs');
var http = require('http');
var url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function(request, response){

	var queryStr = url.parse(request.url, true);
	var fileName = "." + queryStr.pathname;

	if(fileName == './'){fileName = "index";}
	fileName = fileName+".html";
	fileSystem.readFile(fileName, function(err, data){

		if(err){
			response.writeHeader(404, {'Content-Type' : 'text/html'});
			return response.end("404..content not found!!");
		}
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(data);
		return response.end();
	})
}).listen(PORT);


console.log("server listening to port 8080..");