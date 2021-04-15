var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("HELLO WORLD");
// Types
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myBoll = true || false;
var myVar = "hello";
myVar = 22;
// Strings
// document.write(myString);
// Mostrar la variable de tipo número, hay que convertirlo con .toString().
// document.write(myNumber.toString());
// Arrays
// Especificar cualquier tipo de dato, pero de arreglo []
// var StringArray: any[] = ["", "", ""];
// StringArray = [true,2,3];
var StringArray = ["item1", "item1", ""];
var NumberArray = [1, 2, 3, 4];
var BoolenArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
// Tuple: arreglos con estructura definida
// Tendrá una estructura de tipo de dato definida
var strNumTuple;
strNumTuple = ["Hello", 22];
// Void, Undefined, Null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// Funciones
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// Parametros de funciones opcionales
function getName(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    else {
        return firstname + " " + lastname;
    }
}
// document.write(getName("Sonia", "Villeda"));
// Función que no retorna nada
function myVoidFunction() {
    return;
}
// el tipo de objeto tiene la interfaz antes declarada.
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
// showTodo({
//     title: "Eat Dinner",
//     text: "lorem",
// });
var myTodo = { title: "Eat dinner", text: "lorem" };
showTodo(myTodo);
// CLASES
// Las clases en la POO, definen los objetos (cómo están conformados).
// Se divide la programación en múltiples objetos o componentes que tienen comportamientos (métodos) y propiedades.
// Se especifica los modificadores (public {solo accesible dentro de la calse}, private, protected {alcance a las clases que hereden esta}).
var User = /** @class */ (function () {
    // Para recibir datos, se realiza por medio del método del constructor (se ejecuta cuando se realiza la instancia).
    function User(name, email, age) {
        // "this.name" será igual al valor del parámetro.
        this.name = name;
        this.email = email;
        this.age = age;
    }
    // Método para registrar al usuario
    User.prototype.register = function () {
        // Se utiliza "this" para referirse a la clase, se obtiene el valor name desde esta clase.
        console.log(this.name + " is registered");
    };
    User.prototype.showmeAge = function () {
        return this.age;
    };
    // Método privado
    // private AgeInYears() {
    //     return `${this.age} years`;
    // }
    User.prototype.AgeInYears = function () {
        return this.age + " years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid out invoice");
    };
    return User;
}());
// Creando instancia de la clase "User"
var sonia = new User("Sonia", "soda@gmail.com", 23);
// console.log(sonia.register());
console.log(sonia.AgeInYears());
// document.write(sonia.name);
// HERENCIA
// La clase miembro utiliza los mismos datos de la clase "User"
// Al extender de "User" tienes todas las propiedaes o métodos
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    // Para especificar que hereda de la clase "User"
    // Los tipos de datos, se necesita especificar que se heredan del componente padre.
    function Member(id, name, email, age) {
        var _this = 
        // super para heredar del componente padre.
        _super.call(this, name, email, age) || this;
        // Indicar que este es el único que se recibirá en el constructor.
        _this.id = id;
        return _this;
    }
    // Heredar un método de la clase padre
    Member.prototype.payInvoice = function () {
        // Super + el nombre del método padre
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var daniela = new Member(7, "Daniela", "dani@gmail.com", 23);
daniela.payInvoice();
document.write();
