$(document).on("ready", paginaOK);

function paginaOK () {
	$('#box3').on("mousedown", cajaOver);
	$('#box3').on("mouseup", cajaOut);
	
	$('#box').hover(cajaOver, cajaOut);

	$('#box2').on("mousemove", moveBox);

	$('#box4').on("dblclick", dobleCLick);

	$('#nombre').on("focus", enfocarInput);
	$('#nombre').on("blur", desenfocarInput);
}
function cajaOver () {
	$(this).css("background-color", "black");
}
function cajaOut () {
	$(this).css("background-color", "red");
}
function moveBox (event) {
	$('#x').html("coord x: "+event.clientX);
	$('#y').html("coord y: "+event.clientY);
}
function dobleCLick () {
	alert("Ha realizado doble clic en la caja");
}

function enfocarInput () {
	$(this).css("width", "50%");
}
function desenfocarInput () {
	$(this).css("width", "20%");
}