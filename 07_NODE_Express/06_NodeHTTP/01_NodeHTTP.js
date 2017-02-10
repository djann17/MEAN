let http=require("http");
let url="http://www.google.es/";

let callbackres =
	(respuesta) => {
		respuesta.setEncoding("utf8");
		respuesta.on("data", console.log);
		respuesta.on("error", console.error);
	};
http.get(url, callbackres).on("error", console.error);