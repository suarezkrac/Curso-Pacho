$(document).on("ready", paginaCargada);
function paginaCargada () {
	$('#equipos li').on("click", verVideo);
}
function verVideo () {
	$('#colombia_video').addClass("ver_video");
}