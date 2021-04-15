console.log("HELLO WORLD");

// Types
var myString: string = "Hello world";
myString = 22 + "";

var myNumber: number = 22;

var myBoll: boolean = true || false;

var myVar: any = "hello";
myVar = 22;

// Strings
// document.write(myString);
// Mostrar la variable de tipo número, hay que convertirlo con .toString().
// document.write(myNumber.toString());

// Arrays
// Especificar cualquier tipo de dato, pero de arreglo []
// var StringArray: any[] = ["", "", ""];
// StringArray = [true,2,3];

var StringArray: string[] = ["item1", "item1", ""];
var NumberArray: number[] = [1, 2, 3, 4];
var BoolenArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1, 2, true, "hello", [], {}];

// Tuple: arreglos con estructura definida
// Tendrá una estructura de tipo de dato definida
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

// Void, Undefined, Null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Funciones
function getSum(num1: number, num2: number): number {
    return num1 + num2;
}

let mySum = (num1: number | string, num2: number | string): number => {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};

// Parametros de funciones opcionales
function getName(firstname: string, lastname?: string): string {
    if (lastname == undefined) {
        return firstname;
    } else {
        return `${firstname} ${lastname}`;
    }
}

// document.write(getName("Sonia", "Villeda"));

// Función que no retorna nada
function myVoidFunction(): void {
    return;
}

// Interfaces
// Describir la estructura de un objeto.
interface ITodo {
    title: string;
    text: string;
}

// el tipo de objeto tiene la interfaz antes declarada.
function showTodo(todo: ITodo) {
    console.log(`${todo.title} - ${todo.text}`);
}

// showTodo({
//     title: "Eat Dinner",
//     text: "lorem",
// });

let myTodo: ITodo = { title: "Eat dinner", text: "lorem" };

showTodo(myTodo);

// CLASES
// Las clases en la POO, definen los objetos (cómo están conformados).
// Se divide la programación en múltiples objetos o componentes que tienen comportamientos (métodos) y propiedades.
// Se especifica los modificadores (public {solo accesible dentro de la calse}, private, protected {alcance a las clases que hereden esta}).

class User {
    private name: string;
    public email: string;
    protected age: number;

    // Para recibir datos, se realiza por medio del método del constructor (se ejecuta cuando se realiza la instancia).

    constructor(name: string, email: string, age: number) {
        // "this.name" será igual al valor del parámetro.
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // Método para registrar al usuario
    register() {
        // Se utiliza "this" para referirse a la clase, se obtiene el valor name desde esta clase.
        console.log(`${this.name} is registered`);
    }

    showmeAge() {
        return this.age;
    }

    // Método privado
    // private AgeInYears() {
    //     return `${this.age} years`;
    // }
    public AgeInYears() {
        return `${this.age} years`;
    }

    payInvoice() {
        console.log(`${this.name} paid out invoice`);
    }
}

// Creando instancia de la clase "User"
var sonia = new User("Sonia", "soda@gmail.com", 23);

// console.log(sonia.register());

console.log(sonia.AgeInYears());

// document.write(sonia.name);

// HERENCIA
// La clase miembro utiliza los mismos datos de la clase "User"
// Al extender de "User" tienes todas las propiedaes o métodos
class Member extends User {
    id: number;

    // Para especificar que hereda de la clase "User"
    // Los tipos de datos, se necesita especificar que se heredan del componente padre.
    constructor(id: number, name: string, email: string, age: number) {
        // super para heredar del componente padre.
        super(name, email, age);
        // Indicar que este es el único que se recibirá en el constructor.
        this.id = id;
    }

    // Heredar un método de la clase padre
    payInvoice() {
        // Super + el nombre del método padre
        super.payInvoice();
    }
}

var daniela = new Member(7, "Daniela", "dani@gmail.com", 23);
daniela.payInvoice();

document.write();
