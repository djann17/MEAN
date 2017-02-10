"use strict";

let fs=require("fs");
let strlect=fs.createReadStream("trunyo.txt");
let txt="";

let buffy=Buffer.alloc(15);
strlect.on("readable", leer);


function leer(chunk){
	while((buffy=strlect.read())!=null){
		txt+=buffy;
		console.log(buffy.length);
	}
}
strlect.on("end", acabar);

function acabar(){
	
	console.log(txt.length);
}