/* 
    Modificadores de acceso privado: 
    Hacen que tanto la propiedad como la función sólo sean accesibles dentro de la clase a la que están definidas
    Accesible solo en la clase donde se definen.
    */
class Animal {
    private nombre: string;
    private tamano: number;

    public constructor(_nombre: string, _tamano: number) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }

    public moverse(): void {
        console.log("Me estoy moviendo");
    }
}

const obj = new Animal("León", 3);
obj.moverse();
