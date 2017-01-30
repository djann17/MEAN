let fs = require("fs");
for (let i=2;i<process.argv.length;i++){
	let fich=process.argv[i];
	fs.readFile(fich, fAsinc.bind(fich));
}

function fAsinc(error, contenido){
	if (error)
		console.log("Meeeeh", error);
	else{
		let nlin=contenido.toString().match(/\n/g);
		console.log(this + " -> " + nlin.length);
	}
}