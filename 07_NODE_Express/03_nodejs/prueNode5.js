let fs = require("fs");
let i=2;
fs.readFile(process.argv[i], fAsinc.bind(process.argv[i]));	




function fAsinc(error, contenido){
	if (error)
		console.log("Meeeeh", error);
	else{
		let nlin=contenido.toString().match(/\n/g);
		console.log(this + " -> " + nlin.length);
	}
	i++;
	if (i<process.argv.length){
		fs.readFile(process.argv[i], fAsinc.bind(process.argv[i]));
	}
	
}