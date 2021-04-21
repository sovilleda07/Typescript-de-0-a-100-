// Parámetros de solo lectura con la propiedad "readonly".
// Se instancia la primera vez un objeto de la interfaz se le puede dar valor a sus propiedades.
// Pero una vez instanciada la interfaz, ya no puede modificarse.
interface Persona {
    readonly nombre: string;
    readonly apellido: string;
}

let persona: Persona = { nombre: "Sonia", apellido: "Villeda" };
// persona.nombre = "Daniela";
console.log(persona);
