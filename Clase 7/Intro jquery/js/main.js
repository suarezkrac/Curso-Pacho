$(document).on("ready", paginaCargada);

function paginaCargada () {
	console.log("La pagina esta cargada");
	$("#bogota").on("click", botonBogota);
	$("#medellin").on("click", botonMedellin);

	$('#resultado strong').on("click", cerrarVentana);
}
function botonBogota () {
	$('#bogota').addClass("cambiarFuente");
	$('#medellin').removeClass("cambiarFuente");
	$('#resultado p').html("Hola Bogota desde jQuery");
	$('#resultado').css("height", "100px");
}
function botonMedellin () {
	$('#medellin').addClass("cambiarFuente");
	$('#bogota').removeClass("cambiarFuente");
	$('#resultado p').html("Hola Medellin desde jQuery");
	$('#resultado').css("height", "100px");
}
function cerrarVentana () {
	$('#resultado').css("height", "0px");
}
