// Clase de tipo genérico: se le llama así no porque sea genérica; sino porque contiene atributos y métodos que pueden ser genéricos.
class Persona<T> {
    nombre: string;
    edad: T;

    mostrar(dato: T): T {
        return dato;
    }

    // mostrar:(dato:T)=>T
}

// obj es de tipo Persona, no de tipo genérico.
const obj = new Persona();
