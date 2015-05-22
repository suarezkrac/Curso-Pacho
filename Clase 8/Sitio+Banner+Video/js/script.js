$(document).on("ready", paginaCargada);
function paginaCargada () {
	$('#equipos li').on("click", verVideo);
	
	$('#name').on("blur", desenfoqueName);
}
function verVideo () {
	$('#colombia_video').addClass("ver_video");
}

function desenfoqueName () {
	var nombre = $('#name').val();
	if (nombre == "") {
		alert("El nombre es obligatorio!!");
		$('#name').addClass("bordesRojos");
	}else{
		$('#name').removeClass("bordesRojos");
	}
}