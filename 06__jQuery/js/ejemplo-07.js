$(document).ready(initializeEvents);
function initializeEvents(){
    $(document).mousemove(moveDetected);
}
function moveDetected(event){
    $("#coordx").text("Coordenada x="+event.clientX);
    $("#coordy").text("Coordenada y="+event.clientY);
	$("#cosa").css("left",event.clientX);
	$("#cosa").css("top",event.clientY);
}