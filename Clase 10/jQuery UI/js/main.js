$(document).on("ready", paginaOK);

function paginaOK () {
	$('#box1').draggable();
	$('#box2').droppable({
		over:function () {
			$('#box2').css("background", "blue");
		}
	});
	$('#box3').resizable();
	$('#ciudades').selectable();
	$('#paises').sortable();
	$('#acordeon').accordion();

	var posibilidades = ["gripa", "fiebre", "rinitis", "sueño"];

	$('#enfermedad').autocomplete({source: posibilidades});

	$('#boton').button();

	$('#fecha').datepicker();

	$('#pestanas').tabs();

	$('#alerta').dialog();

	$('#cedula').tooltip();
}