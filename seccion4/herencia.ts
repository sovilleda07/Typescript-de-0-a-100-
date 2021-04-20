class Padre {
    nombre: string;
    edad: number;

    constructor(_nombre: string, _edad: number) {
        this.nombre = _nombre;
        this.edad = _edad;
    }

    mostrarNombre(): void {
        console.log(this.nombre);
    }
}

// Clase hijo se extiende (hereda) de la clase Padre
class Hijo extends Padre {
    apellido: string;

    // Tiene que tener los atributos del constructor de la clase Padre con los de la clase Hijo
    constructor(_nombre: string, _edad: number, _apellido: string) {
        // "super" llama al constructor de la clase Padre
        super(_nombre, _edad);
        this.apellido = _apellido;
    }

    mostrarNombreHijo(): void {
        console.log(this.nombre);
    }
}

const nuevoHijo = new Hijo("Manuel", 22, "Muñoz");
nuevoHijo.mostrarNombre();
nuevoHijo.mostrarNombreHijo();
