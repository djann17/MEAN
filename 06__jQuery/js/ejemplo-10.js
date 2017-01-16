$(document).ready(initializeEvents);
function initializeEvents(){
	$("input[type='text'").each(function(){
	    $(this).focus(setfocus);
		$(this).blur(setBlur);
   });

}
function setfocus(){
	var k=($(this).index()+1)*10;
	var color="#"+k+"FFFF";
    $(this).css("color",color);
}
function setBlur(){
    $(this).css("color","green");
}