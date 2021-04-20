abstract class Padre {
    abstract caminar(): void;
    abstract gatear(): void;

    saludar(saludo: string): string {
        return saludo;
    }
}

class Hijo extends Padre {
    caminar(): void {
        console.log();
    }
    gatear(): void {
        console.log();
    }
}

class otraClase extends Padre {
    caminar(): void {
        console.log();
    }
    gatear(): void {
        console.log();
    }
}
