$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(cambiaClass);
    $("#boton2").click(cambiaClass);
	$("#boton3").click(cambiaClass);
}

function cambiaClass(){
	var $btn=$(this);
	switch ($btn.attr("id")){
		case "boton1":
			$("#descripcion").addClass("recuadro");
			break;
		case "boton2":
			$("#descripcion").removeClass("recuadro");
			break;
		case "boton3":
			$("#descripcion").toggleClass("recuadro");
			break;	
	}
}
