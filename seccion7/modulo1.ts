// Exportación por defecto.
class Persona {
    nombre: string;
    edad: number;
    altura: number;

    constructor(nombre: string, edad: number, altura: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    mostrar(): void {
        console.log(this.nombre);
    }
}

// Exportamos todo el objeto / clase.
export default Persona;
