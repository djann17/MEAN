"use strict";

let fs=require("fs");
let zlib=require("zlib");
/*
let strlect=fs.createReadStream("trunyo.txt");
let stresc=fs.createWriteStream("otroTrunyo.txt");

strlect.setEncoding("utf8");

strlect.on("data", leer);

function leer(chucky){
	stresc.write(chucky.toString());
}

strlect.pipe(stresc);*/

fs.createReadStream("ades.pdf").pipe(zlib.createGzip()).pipe(fs.createWriteStream("aparla.gz"));