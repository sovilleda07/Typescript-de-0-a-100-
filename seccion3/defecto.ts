// Parámetros por defecto
const mostrar = (nombre: string, apellido: string, edad: number = 32) => {
    return `Se llama ${nombre} su apellido ${apellido} y tiene ${edad} años`;
};

mostrar("Sonia", "Villeda", 23);
