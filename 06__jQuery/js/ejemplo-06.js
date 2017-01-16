$(document).ready(initializeEvents);
function initializeEvents(){
  /* $("a").mouseover(inMouseEvent);
   $("a").mouseout(outMouseEvent);*/
   $("a").hover(inMouseEvent,outMouseEvent);
}
function inMouseEvent(){
    $(this).css({
		"background-color":"#ff0",
		"border":"1px solid black",
		"box-shadow":"2px 2px #ff0000"
	});
}
function outMouseEvent(){
    $(this).css({
		"background-color":"#fff",
		"border":"",
		"box-shadow":""
	});
}