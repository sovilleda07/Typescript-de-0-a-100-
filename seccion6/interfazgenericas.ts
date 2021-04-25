/*
    Interfaz genérica:
    Necesitan tener un tipo de dato por defecto, no pueden ser genéricas en global.
    Las interfaces genéricas genéricas, no pueden ser; lo son en su definición pero a la hora de su implementación, tienes que decirle que tipo de dato va a contener.
 */
interface Persona<T> {
    nombre: T;
}

// Se asigna así para no limitar el tipo de dato de la interfaz
let obj: Persona<string> = { nombre: "Sonia" };

let num: Persona<number> = { nombre: 23 };
