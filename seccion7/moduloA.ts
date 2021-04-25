// Exportar la constante "nombre" que será llamada en otro archivo o módulo.
export const nombre: string = "Sonia";

export class Persona {
    nombre: string;
}

export interface Humano {
    nombre: string;
}

export const mostrar = (dato: string): void => {
    console.log("Mostrar");
};
