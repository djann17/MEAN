"use strict";
let buffy=Buffer.from("Como mola mi gramola", "UTF-8");
let paco=Buffer.alloc(20);
buffy[0]=0x64;
let cadena=buffy.toString();
let pepe="eres un cabron hijoputa, un cabron y un pedorreta de hijo puta...";

console.log(buffy);
console.log(cadena);


paco.writeUInt32BE(1,1,2,3,4);

console.log(paco);