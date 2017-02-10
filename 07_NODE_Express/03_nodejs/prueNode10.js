"use strict";
var eventos=require("events");
var emitEvento=eventos.EventEmitter;
var emisor= new emitEvento();
emisor.on("miEvento", fCallback);

function fCallback(datos){
	console.log("Morralla:" + datos.p1 +
	 " , " + datos.p2);
	 
}
let contador=0;

function intervalo(){
	emisor.emit("miEvento", {
		p1:Date.now(),
		p2:contador
	});
	contador++;
}
setInterval(intervalo,500);