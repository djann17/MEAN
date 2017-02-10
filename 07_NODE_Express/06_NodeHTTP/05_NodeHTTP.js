let http=require("http");
let fs=require("fs");

function enviarImagen(request,response){
	response.writeHead(200,{"content-type":"image/jpg"});
	fs.createReadStream("1.jpg").pipe(response);
	
}
var server=http.createServer(enviarImagen);
server.listen(8888);
console.log("Ahí vamos");