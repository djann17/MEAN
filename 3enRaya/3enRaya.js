function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function jugar(){
	if (ronda==1){
	  $("#btcom").val("Fin de turno");
	    $("#ficha").show();
	}		
	if (ronda<=6)
	  inificha();
    if (ronda==7)
	    $("#ficha").hide();
	if (ronda%2!=0)
	  $("#mensaje").html("Tu turno Jugador 1");
     else
	  $("#mensaje").html("Tu turno Jugador 2");	
	ronda++;
	
}
	
function inificha(){
  var jug;
  var ntur;
  var nimg;
  switch (ronda){
    case 1: jug="o"; ntur=1; nimg="circle.png"; break;
	case 2: jug="x"; ntur=1; nimg="x.png"; break;
	case 3: jug="o"; ntur=2; nimg="circle.png"; break;
	case 4: jug="x"; ntur=2; nimg="x.png"; break;
	case 5: jug="o"; ntur=3; nimg="circle.png"; break;
	case 6: jug="x"; ntur=3; nimg="x.png"; break;
  }

  var txt="<img id='" + jug + ntur + "' src='" + nimg + "' draggable='true' ondragstart='drag(event)'>";
  $("#celdafich").html(txt);

}