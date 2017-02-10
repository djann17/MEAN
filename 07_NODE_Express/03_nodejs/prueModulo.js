"use strict";
let fs = require("fs");
let path = require("path");


module.exports = function (rdir, rext, callback){

	fs.readdir(rdir,(error,ficheros) => {
		if (error)
			callback(error);
		else{
			ficheros = ficheros.filter((fichero) => {
				if (path.extname(fichero))
					return path.extname(fichero)===rext;
			});
			callback(null,ficheros);
		}
	});
}