$(document).on("ready", paginaOK);

function paginaOK () {
	$(window).scroll(scrollPagina);

	$("h1").addClass("animated zoomInDown");
	$('.boxes').addClass("animated bounceInLeft");
	

	$('#showb1').on("click", showBox1);
	$('#hideb1').on("click", hideBox1);	

	$('#upb2').on("click", upBox2);
	$('#downb2').on("click", downBox2);

	$('#fadeIb3').on("click", fadeInBox3);
	$('#fadeOb3').on("click", fadeOutBox3);

	$('#toggleb4').on("click", toggleBox4);

	$('#toggleb5').on("click", toggleBox5);

	$('#fadeto1b6').on("click", fadeToBox6);

	$('#animateb7').on("click", animateBox7);
}
function scrollPagina (argument) {
	var posScroll = $(window).scrollTop();
	console.log(posScroll);
	if (posScroll > 30) {
		$('h1').css({
			"background": "black",
			"color": "white"
		});

	}
	if (posScroll < 30) {
		$('h1').css({
			"background": "white",
			"color": "black"
		});
	}

}
function animateBox7 (argument) {
	$('#box7').animate({
		width:"100%"
	});
}

function fadeToBox6 (argument) {
	$('#box6').show();
	$('#box6').fadeTo("slow", 0.8);
}

function toggleBox5 (argument) {
	$('#box5').toggle("slow");
}

function toggleBox4 (argument) {
	$('#box4').slideToggle();
}
function fadeInBox3 (argument) {
	$('#box3').fadeIn();
}

function fadeOutBox3 (argument) {
	$('#box3').fadeOut();
}

function showBox1 (argument) {
	$('#box1').show("slow");
}

function hideBox1 (argument) {
	$('#box1').hide("slow");
}
function upBox2 (argument) {
	$('#box2').slideUp("slow");
}
function downBox2 (argument) {
	$('#box2').slideDown();
}