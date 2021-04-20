/* 
    Modificadores de acceso: que tipo de acceso tendrá el usuario o la persona que podrá modificar el código.
*/
class Animal {
    // Por defecto las propiedades, constructor y método son de modificación pública.
    public nombre: string;
    public tamano: number;

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
