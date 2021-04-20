/* 
    Modificadores de acceso prtogedio: 
    Es muy parecdio al privado, no se puede acceder a los atributos desde el exterior de una clase.
    Solamente desde su interior (Clase); pero a diferencia del privado, se puede acceder desde una clase que herede de la clase padre.
*/
class Padre {
    protected nombre: string;

    public constructor(nombre_: string) {
        this.nombre = nombre_;
    }
}

class Hijo extends Padre {
    public apellido: string;

    constructor(nombre_: string, apellido_: string) {
        super(nombre_);
    }

    mostrarNombre(): void {
        console.log(this.nombre);
    }
}

const obj = new Hijo("Sonia", "Villeda");
