// No se necesita colocar las llaves al momento de importar,
// porque como se está trabajando con un objeto completo y lo estamos exportando por defecto.
// ya no necesitamos hacer un Object Destructuring; nos estamos trayendo todo el archivo.
import Persona from "./modulo1";

const p = new Persona("Sonia", 23, 1.7);
p.mostrar();
