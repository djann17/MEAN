$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(toggleBox);
	
}
function toggleBox(){
	var $k=$("div");
	var i=-1;
	$k.each(function(){
	i++;
		if (i<($k.length/2))
			$(this).toggle("fast");
		else 
			$(this).toggle("slow");
	});

}
