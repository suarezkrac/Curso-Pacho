//$(document).on("deviceready", appCargada);
$(document).on("ready", appCargada);

function  appCargada () {
	$('#validar').on("click", validarUsuario);
}

function validarUsuario (argument) {
	var x = $('#user').val();
	var y = $('#pass').val();

	if (x == "gio" && y == "123") {
		return true;

	}
	else{
		alert("Usuario o clave Incorrecta!!");
	}
	return false;
}