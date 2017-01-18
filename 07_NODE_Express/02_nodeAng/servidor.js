// Importar

var express=require("express") ;

// Instanciar

var app = express();

// Enrutar

app.get("/", petiPrinci);

app.get("/01_NG1_expresiones.html", petiExpres);
app.get("/02_NG1_directivas.html", petiDirect);
app.get("/03_NG1_filtros.html", petiFiltros);
app.get("/04_NG1_ordenamiento.html", petiOrdena);
app.get("/05_NG1_controlador.html", petiControla);

function petiPrinci(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/index.html");
}	

function petiExpres(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/01_expres.html");
}	
function petiDirect(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/02_direct.html");
}	
function petiFiltros(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/03_filtros.html");
}	
function petiOrdena(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/04_ordena.html");
}	
function petiControla(peticion, respuesta){
	respuesta.sendfile(__dirname + "/Ficheros/05_controla.html");
}	

app.listen(4700);