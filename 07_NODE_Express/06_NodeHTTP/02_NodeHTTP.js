let http=require("http");
let url = "http://www.acb.com/";
let datosPlanos="";

let callbackres = (res) => {
	const codEstado = res.statusCode;
	const tipoConten = res.headers ["content-type"];
	console.log(tipoConten);
	let error;
	if (codEstado!==200){
			error=new Error(`Fracaso ->  ${codEstado}`);
	}else if (!/^application\/json/.test(tipoConten)){
		error= new Error("contenido invalido");
	}else{
		const tama=res.headers["content-length"];
		console.log("Tamaño:" + tama);
	}
	if (error){
		console.log(error.message);
		res.resume();
		return;
	}
	
	res.setEncoding("utf8");
	res.on("data", recibeDatos);
	res.on("end", () => {
		try{
			let datParseado=JSON.parse(datosPlanos);
			console.log(datParseado);
			
		} catch (e){
			console.log(e.message);
		}
	});
	
};
function recibeDatos(bufferChunk){
			datosPlanos += bufferChunk;
}

http.get(url, callbackres).on("error", console.error);