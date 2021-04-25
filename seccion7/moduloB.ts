// Aquí realizaremos la importación de los métodos y constantes necesarias del "moduloA".
import { nombre, Persona, Humano, mostrar } from "./moduloA";
//console.log(nombre);

const humano: Humano = { nombre: "Sonia" };

mostrar("Sonia");

// Importar todo del módulo con un alias.
import * as paquete from "./moduloA";
paquete.mostrar("Sonia");
