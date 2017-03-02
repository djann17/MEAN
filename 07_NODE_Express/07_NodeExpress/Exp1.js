var express=require("express") ;

var app = express();

var contestatario = (request, response) => {
	console.log("Accediendo");
	response.send("Respuesta");
}

var reservas = {
	getAll:function(){
		return "{reservas}";
	}
	
	post:function(){
		return "{ Reserva" + idReserva}";
	}
	
	
}





app.get("/", contestatario);
app.post("/", contestatario);
app.all("/", contestatario);



app.listen(4700);




console.log("Cushando");
