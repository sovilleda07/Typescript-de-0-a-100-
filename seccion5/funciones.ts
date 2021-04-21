/**
     Cuando hablamos de interfaces para funciones, ya no se definen las propiedades; sino que propiedades va a recibir,
      de que tipo y qué va a devolver la función.
      No realizará ninguna acción, sólo será una plantilla.

 */
interface General {
    // Ya está definida la interfaz, que define una plantilla para una función.
    (nombre: string, apellido: string, edad: number): void;
}

// Variable de tipo
let funcionGeneralUno: General;
funcionGeneralUno = function (
    nombre: string,
    apellido: string,
    edad: number
): void {
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`);
};

funcionGeneralUno("Sonia", "Villeda", 23);
