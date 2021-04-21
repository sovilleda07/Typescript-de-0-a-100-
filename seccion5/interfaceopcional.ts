// Para parámetros opcionales utilizar: ?
interface Persona {
    altura: number;
    peso: number;
    nombre?: string;
}

let persona = { altura: 1.7, peso: 150, nombre: "Sonia" };

function mostrarMediaPeso(persona: Persona): string {
    let mediaPeso: number = persona.altura / persona.peso;
    if (persona.nombre) {
        return `${persona.nombre} tiene una media de ${mediaPeso}`;
    } else {
        return `No se quien eres, pero tienes una media de ${mediaPeso}`;
    }
}

console.log(mostrarMediaPeso(persona));
