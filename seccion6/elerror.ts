/* ¿Qué son los Genéricos?

TypeScript está diseñado para ser un lenguaje de tipado.
En el hecho de poder tener un tipo de dato "Any" es básicamente
contraproducente en el lenguaje y genera ciertos errores.
Para ello, nacen los datos o el tipado genérico. */

const nombre: string = "Sonia";
const numero: number = 23;
let noLoSe: any = "Sonia";
// Como no está identificado el tipado, no reconocerá los métodos para utilizar.
//noLoSe.
