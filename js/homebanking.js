//Declaración de variables
var nombreUsuario = "Juan Perez";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;

var precioServicioAgua = 350;
var precioServicioTelefono = 425;
var precioServicioLuz = 210;
var precioServicioInternet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoSeguridad = 6969;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

// Funciones creadas desde cero
function incrementarSaldo(dineroASumar) {
	saldoCuenta += dineroASumar;
}

function reducirSaldo(dineroARestar) {
	saldoCuenta -= dineroARestar;
}

function haySaldoDisponible(inputUsuario)  {
	var flag = false;
	if (saldoCuenta >= inputUsuario) {
		flag = true;
	}
	return flag;
}

function respetaLimiteExtraccion(inputUsuario) {
	var flag = false;
	if (limiteExtraccion >= inputUsuario) {
		flag = true;
	}
	return flag;
}

function esCompatibleConBilleteDeCien(inputUsuario) {
	var flag = false;
	if ((inputUsuario%100) == 0) {
		flag = true;
	}
	return flag;
}

function esInputValido(inputUsuario) {
	var flag = true;
	if (isNaN(inputUsuario)) {
		flag= false;
	} 
	return flag;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevoLimiteExtraccion = parseInt(prompt("Ingrese nuevo límite de extracción:"));
	if (esInputValido(nuevoLimiteExtraccion)) {	// Verifico que no haya apretado "Cancel", o dejado el campo VACIO o ingresado un caracter que no sea número.
		var limiteExtraccionAnterior = limiteExtraccion;
		limiteExtraccion = nuevoLimiteExtraccion;
		actualizarLimiteEnPantalla();
		alert("Nuevo limite de extracción: $" + nuevoLimiteExtraccion + " (limite anterior: $" + limiteExtraccionAnterior + ")");
	} else {
		alert("LA INGRESADA NO ES UNA OPCION VALIDA");
	}
}

function extraerDinero() {
	var montoAExtraer = parseInt(prompt("Ingrese el monto a extraer:"));
	if (esInputValido(montoAExtraer)) {	// Verifico que no haya apretado "Cancel", o dejado el campo VACIO o ingresado un caracter que no sea número.
		if ((haySaldoDisponible(montoAExtraer)) && (respetaLimiteExtraccion(montoAExtraer)) && (esCompatibleConBilleteDeCien(montoAExtraer))) {
			var saldoAnterior = saldoCuenta;
			reducirSaldo (montoAExtraer);
			actualizarSaldoEnPantalla();
			alert("Has retirado: " + montoAExtraer + "\nSaldo Anterior: $" + saldoAnterior + "\nSaldo Actual: $" + saldoCuenta);
		} else {
			if (haySaldoDisponible(montoAExtraer) == false) {
				alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");	
			} 
			if (respetaLimiteExtraccion(montoAExtraer) == false) {
				alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");	
			}
			if (esCompatibleConBilleteDeCien(montoAExtraer) == false) {
				alert("Solo puedes extraer billetes de 100.");	
			}		
		}
	} else {
		alert("LA INGRESADA NO ES UNA OPCION VALIDA");
	}		
}

function depositarDinero() {
	var montoADepositar = parseInt(prompt("Ingrese el monto a depositar:"));
	if (esInputValido(montoADepositar)) { // Verifico que no haya apretado "Cancel", o dejado el campo VACIO o ingresado un caracter que no sea número.
		var saldoAnterior = saldoCuenta;
		incrementarSaldo(montoADepositar);
		actualizarSaldoEnPantalla();
		alert("Has depositado: $" + montoADepositar + "\nSaldo Anterior: $" + saldoAnterior + "\nSaldo Actual: $" + saldoCuenta);
	} else {
		alert("LA INGRESADA NO ES UNA OPCION VALIDA");
	}		
}

function pagarServicio() {
	var seleccion = parseInt(prompt("Ingrese el número que corresponda con el servicio que queres pagar\n"+
		   "1 - Agua\n"+
		   "2 - Luz\n"+
		   "3 - Internet\n"+
		   "4 - Teléfono"));
		   
	if (esInputValido(seleccion)) {  // Verifico que no haya apretado "Cancel", o dejado el campo VACIO o ingresado un caracter que no sea número.
		switch ( seleccion ) {
			case 1: // si la seleccion fue AGUA
				if (haySaldoDisponible(precioServicioAgua) == false) {
					alert("No hay suficiente saldo en tu cuenta para pagar servicio de AGUA.");	
				} else {
					var saldoAnterior = saldoCuenta;
					reducirSaldo (precioServicioAgua);
					actualizarSaldoEnPantalla();
					alert("Has pagado el servicio de AGUA. \nSaldo Anterior: $" + saldoAnterior + "\nDinero descontado: $" + precioServicioAgua + "\nSaldo Actual: $" + saldoCuenta);
				}
				break;
			case 2: // si la seleccion fue LUZ
				if (haySaldoDisponible(precioServicioLuz) == false) {
					alert("No hay suficiente saldo en tu cuenta para pagar servicio de LUZ.");	
				} else {
					var saldoAnterior = saldoCuenta;
					reducirSaldo (precioServicioLuz);
					actualizarSaldoEnPantalla();
					alert("Has pagado el servicio de LUZ. \nSaldo Anterior: $" + saldoAnterior + "\nDinero descontado: $" + precioServicioLuz + "\nSaldo Actual: $" + saldoCuenta);
				}
				break;
			case 3: // si la seleccion fue INTERNET
				if (haySaldoDisponible(precioServicioInternet) == false) {
					alert("No hay suficiente saldo en tu cuenta para pagar servicio de INTERNET.");	
				} else {
					var saldoAnterior = saldoCuenta;
					reducirSaldo (precioServicioInternet);
					actualizarSaldoEnPantalla();
					alert("Has pagado el servicio de INTERNET. \nSaldo Anterior: $" + saldoAnterior + "\nDinero descontado: $" + precioServicioInternet + "\nSaldo Actual: $" + saldoCuenta);
				}
				break;
			case 4: // si la seleccion fue TELEFONO 
				if (haySaldoDisponible(precioServicioTelefono) == false) {
					alert("No hay suficiente saldo en tu cuenta para pagar servicio de TELEFONO.");	
				} else {
					var saldoAnterior = saldoCuenta;
					reducirSaldo (precioServicioTelefono);
					actualizarSaldoEnPantalla();
					alert("Has pagado el servicio de TELEFONO. \nSaldo Anterior: $" + saldoAnterior + "\nDinero descontado: $" + precioServicioTelefono + "\nSaldo Actual: $" + saldoCuenta);
				}
				break;
			default:
				alert("No existe el servicio que se ha seleccionado");
		}
	} else {
		alert ("LA INGRESADA NO ES UNA OPCION VALIDA");
	}
}

function transferirDinero() {
	var montoATransferir = parseInt(prompt("Ingrese el monto a transferir:"));
	if (esInputValido(montoATransferir)) { // Verifico que no haya apretado "Cancel", o dejado el campo VACIO o ingresado un caracter que no sea número.
		if (haySaldoDisponible(montoATransferir) == false) {
			alert ("No hay saldo suficiente para la suma que desea transferir.");
		} else {
			var cuentaDestino = parseInt(prompt("Ingrese el nro de cuenta al que desea transferir:"));
			if ((cuentaDestino == cuentaAmiga1) || (cuentaDestino == cuentaAmiga2)) {
				reducirSaldo (montoATransferir);
				actualizarSaldoEnPantalla();
				alert("Se han transferido: $" + montoATransferir + "\nCuenta destino: " + cuentaDestino);
			} else {
				alert("Solo puede transferirse dinero a una cuenta amiga.");
			}
		}
	} else {
		alert ("LA INGRESADA NO ES UNA OPCION VALIDA");
	}
}

function iniciarSesion() {
	var codigoSeguridadIngresado = parseInt(prompt("Ingrese su código de Seguridad:"));
	if (codigoSeguridadIngresado == codigoSeguridad) {
		alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.")
	} else {
		reducirSaldo(saldoCuenta);
		alert("Código incorrecto.  Tu dinero ha sido retenido por cuestiones de seguridad.");
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}