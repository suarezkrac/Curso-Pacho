$(document).on("ready", paginaCargada);
function paginaCargada () {

	$(window).scroll(scrollPagina);
	
	$('#equipos article').addClass("animated zoomInUp");

	$('#equipos li').on("click", verVideo);
	
	$('#name').on("blur", desenfoqueName);
}
function scrollPagina (argument) {
	var posScroll = $(window).scrollTop();

	if (posScroll > 50) {
		$('#logo').css({
			"width": "50px",
			"margin-right": "30px"
		});
		$('h1').hide();
		$('.botones').css({
			"margin-top": "0"
		});
		$('header').addClass("changeHeader");
	}
	if (posScroll < 50) {
		$('#logo').css({
			"width": "130px",
			"margin-right": "0px"
		});
		$('h1').show();
		
		$('.botones').css({
			"margin-top": "10px"
		});
		$('header').removeClass("changeHeader");
	}

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