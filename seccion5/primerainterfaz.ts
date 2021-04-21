/*
    Una interfaz es como una clase abstracta, una plantilla donde definimos las propiedades y funciones.
    Pero a la hora de implementarla necesitamos que sean exactamente iguales a como la hemos definido.
*/

// La interfaz define una serie de atributos y propiedades, hace que yo pueda generar variables nuevas del tipo (de esa interfaz),
// o pasar parámetros de tipo de esta interfaz.
// Permite acceder a las propiedades.
interface Persona {
    // Atributos: los que se definan aquí son obligatorios al momento de generarla.
    // Pero se pueden agregar más al momento de utilizarla, sin necesidad que estén definidos aquí.
    nombre: string;
}

// Se pueden agregar más parámetros.
function caminar(persona: Persona): void {
    console.log(`La persona ${persona.nombre} está caminando`);
}

let nueva_persona = { nombre: "Sonia" };
caminar(nueva_persona);
