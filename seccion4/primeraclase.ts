/*Una clase es una plantilla para la creación de objetos que comparten un modelo predefinido.
 Se crea una instancia u objeto, define cuales son los atributos y los métodos que poseen. */

class Vehiculo {
    // Propiedades
    marca: string;
    fecha: string;
    puertas: number;

    constructor(marca_: string, fecha_: string, puertas_: number) {
        // this hace referencia a Vehiculo
        // Vehiculo.marca = marca_;
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }

    // Métodos
    acelerar(): void {
        console.log("Ojo que acelero");
    }
    frenar(): void {
        console.log("Ojo que freno");
    }
}

const coche = new Vehiculo("Ford", "12/7/2018", 4);
coche.marca;
coche.fecha;
console.log(coche.marca);

coche.acelerar();
