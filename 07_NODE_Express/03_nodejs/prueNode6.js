let fs = require("fs");
let path=require("path");

let dire=process.argv[2];
let ext=process.argv[3];

if (process.argv.length < 4)
	console.log("Que no cazurro, que te faltan argumentos");

fs.readdir(dire, (error, ficheros) => {
	if (error)
		console.error("Lasca gao: " + error);
	else{
		console.log("Listar con funciones normales");
		ficheros.forEach((fichero) => {
			if (path.extname(fichero)==ext){
				console.log("Mostrando normal: " + fichero);
			}
		});
	}
});