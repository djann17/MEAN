$(document).ready(inicializarEventos);

function inicializarEventos(){
    $("#titulo1").click(presionTitulo);
    $("#titulo2").click(presionTitulo);
}

function presionTitulo(){
	var $titu=$(this);
	if ($titu.attr("id")=="titulo1"){
		$titu.css({
			"color":"#ff0000",
			"background-color":"#ffff00",
			"font-family":"Courier"
		})
	}else if ($titu.attr("id")=="titulo2"){
		$titu.css({
			"color":"#ffff00",
			"background-color":"#ff0000",
			"font-family":"Arial"
		})
	}
}
