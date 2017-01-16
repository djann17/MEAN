$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(deleteAll);
   $("#boton2").click(restoreAll);
   $("#boton3").click(addLastElement);
   $("#boton4").click(addFirstElement);
   $("#boton5").click(deleteLastElement);
   $("#boton6").click(deleteFirstElement);
   $("#boton7").click(deleteFirstAndSecond);
   $("#boton8").click(creaBusqueda);   
   $("li").attr("contenteditable","true");
}
function deleteAll(){
    $("ul").empty();
}
function restoreAll(){
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
	   $("li").attr("contenteditable","true");
}
function addLastElement(){
    $("ul").append("<li>Agrego un item al final</li>");
	   $("li").attr("contenteditable","true");
}
function addFirstElement(){
    $("ul").prepend("<li>Agrego un item al principio</li>");
	   $("li").attr("contenteditable","true");
}
function deleteLastElement(){
    let position = $("li").length-1;
    let liToDelete = $("li").eq(position);
    liToDelete.remove();
}
function deleteFirstElement(){
    $("li").eq(0).remove();
}
function deleteFirstAndSecond(){
    $("li:lt(2)").remove();
}
function deletePreAndLast(){
   let position = $("li").length-3;
   let liToDelete = $("li:gt("+position+")");
   liToDelete.remove();
}
function creaBusqueda(){
	$("#paco").empty();
	var $lili=$("li");
	var txt="";
	for (var i=0; i<$lili.length;i++)
		if ($($lili[i]).html().includes($("#busca").val()))
			txt+="<li>" + $($lili[i]).html() + "</li>";
	
	if (txt)
		txt="<ul>" + txt + "</ul>";
	$("#paco").html(txt);
}
