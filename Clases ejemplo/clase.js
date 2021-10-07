"use strict";
var Personal = /** @class */ (function () {
    // Llamado cuando se crea un objeto.
    function Personal(nombre_p) {
        this.nombre = nombre_p; //nombre_p es variable.
    }
    //Para imprimir el nombre, porque está en privado.
    Personal.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Personal.precio = function () {
        return 450000;
    };
    return Personal;
}());
var estudiante = new Personal("Estileindan"); // Variable de tipo objeto.
console.log(estudiante.obtenerNombre());
console.log("El valor de la matcula es de $ " + Personal.precio() + " pesos");
