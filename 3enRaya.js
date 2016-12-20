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

function comenzar(){
  $("#ficha").show();
  var txt="<img id='o1' src='circle.png' draggable='true' ondragstart='drag(event)'>";
  $("#celdafich").html(txt);
}
	
