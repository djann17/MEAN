let fs = require("fs");
let fich= process.argv[2];
let contenido = fs.readFileSync(fich);
let nlin=contenido.toString().match(/\n/g);
console.log(nlin.length+1);
var miStorage;
if (typeof localstorage == "undefined" || localstorage === null){
		var lcstorage=require("node-localstorage").LocalStorage;
		miStorage = new LocalStorage("./Storage");
		