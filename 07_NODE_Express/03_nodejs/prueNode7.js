"use strict";
let ajo=require("./prueModulo.js");
let dire=process.argv[2];
let ext=process.argv[3];

if (process.argv.length < 4)
	console.log("Que no cazurro, que te faltan argumentos");
else
	ajo(dire, ext, fResul);

function fResul(error,dire){
	if (error)
		console.log("Wo wo wo woooo");
	else{
		dire.forEach((fichero) =>{
			console.log(fichero);
		});
	}
}