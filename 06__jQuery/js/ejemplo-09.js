$(document).ready(initializeEvents);
function initializeEvents(){
    $("#buscar").focusout(clearValue);
	
	
}
function clearValue(){
    $("#buscar").val("Buscar...");
}