// Importar

var express=require("express") ;

// Instanciar

var app = express();

// Enrutar

app.get("/", petiPrinci);

app.get("/about", petiAbout);

function petiPrinci(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/index.html");
}	

function petiAbout(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/about.html");
}	


app.listen(4700);