$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
	$("div").click(hideBox);
}
function hideBox(){
	event.stopPropagation();
    $(this).fadeOut("slow");
}
function showBox(){
     $("div:even").fadeIn("slow");
}