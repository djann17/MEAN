let http=require("http");
let url=require("url");


var server = http.createServer(
	(request, response) => {
		var miUrl=url.parse(request.url, true);
		console.log(miUrl.path);
		response.writeHead(200,{"content-type":"text/html"});
		response.end("<html<body><span>Olakase</span></body></html>");
	}
);
server.listen(8888);
console.log("Ahí vamos");