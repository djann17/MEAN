$(document).ready(initializeEvents);
function initializeEvents(){
    $("#parrafos p").each(markBySize);
	$("#parrafos p").mousedown(alerta);
}
function markBySize(){
    if($(this).text().length<100){
        $(this).css("background-color","#ff0");
    }
}
function alerta(){
	if (event.which==3)
		if($(this).text().length>100)
			alert ($(this).html());
	
}