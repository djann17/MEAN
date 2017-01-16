$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(primo);
    $("#boton2").click(showBox);
	$("div").click(hideBox);
}
function primo (){alert ("Has picado");}

function hideBox(){
	event.stopPropagation()
    $(this).hide("slow");
}
function showBox(){
     $("div").show("fast");
}