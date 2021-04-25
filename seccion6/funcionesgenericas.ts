// Función genérica, recibe cualquier tipo de datos, sin utilizar "Any".
// Se establece que es de tipo "<T>" la función y el parámetro y su return de tipo "T".
// Independientemente del tipo de dato, se convierte.

function mostrarGenerica<T>(dato: T): T {
    return dato;
}

console.log(mostrarGenerica("Sonia"));
console.log(mostrarGenerica(23));
console.log(mostrarGenerica(true));
