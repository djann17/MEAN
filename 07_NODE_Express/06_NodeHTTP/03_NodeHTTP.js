let http=require("http");
var bl=require("bl");
http.get("http://www.google.es", (res) =>{
	res.pipe(bl((error, datos) => {
		if (error){
			return console.error("Fracaso" + error);
		}else{
			let datstr=datos.toString();
			console.log("Nº chars:"+datstr.length);
			console.log("Datos:\n"+datstr);
			
		}
	})
	);
});