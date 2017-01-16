$(document).ready(initializeEvents);
function initializeEvents(){
    $("td").mousedown(downEvent);
    $("td").mouseup(downEvent);
}
function downEvent(){
	if (event.type=="mouseup"){
		$vg=0;
	}else if (event.type=="mousedown"){
		$vg=1;
		patata();
	}
}

function patata(){
	var limit=event.timeStamp;
	var ahora=Date.now();
	var ajo=ahora-limit+2000;
	for (;ahora<limit+ajo;ahora=Date.now());
	if ($vg)
		alert ("Si hay que ir se va");
}	