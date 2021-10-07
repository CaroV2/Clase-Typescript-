class Personal{

// Atributo.
    private nombre : string;

// Llamado cuando se crea un objeto.
    constructor (nombre_p : string) {    
    this.nombre = nombre_p; //nombre_p es variable.
}

//Para imprimir el nombre, porque está en privado.
    obtenerNombre() : string{
        return this.nombre;
    }

    static precio() : number{
        return 450000;
    }

}

let estudiante = new Personal("Estileindan"); // Variable de tipo objeto.

console.log(estudiante.obtenerNombre());
console.log("El valor de la matcula es de $ " + Personal.precio() + " pesos")