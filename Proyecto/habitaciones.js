function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }
}


function ControladorCancelacion() {
    this.mail;
    this.fecha_inicio;

    this.quitarReserva = function() {
        Modelo.Reserva.quitar({
		var x=Modelo.Reserva.length;
		for (var i==0; i<x; i++)
			if (this.mail==Modelo.Reserva[i].email && this.fecha_inicio==Modelo.Reserva[i].fecha_inicio){
				Modelo.Reserva.splice(i,1);
				break;
			}
		});
    }
}


var moduloAplicacion = angular.module("habitaciones", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
moduloAplicacion.controller("CancelacionController", ControladorCancelacion);