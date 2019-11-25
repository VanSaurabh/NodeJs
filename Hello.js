var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	response.writeHead(200, {'content-type': 'text/html'});
	var queryString  = url.parse(request.url, true).query;
	var dates = queryString.year;
	response.end(dates);
}).listen(8080);