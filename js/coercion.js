//Existen dos tipos de coerción:
//Coerción implícita: es cuando el lenguaje nos ayuda cambiando un tipo valor a otro tipo de valor
//Coerción explícita: es cuando obligamos a que un tipo de valor cambie a otro tipo de valor deseado

//Coerción implícita
4 + "7"; //47
4 * "7"; //28
2 + true; //3
false - 3; //-3

//Coerción explícita
var a = 20;
var b = a + "";

console.log(b);
console.log(typeof b); //Es un string porque lo concatena en la var b

var c = 10;
var d = String(c);

console.log(d);
console.log(typeof d); //Es un string porque el método String() lo convierte explícitamente sin usar concatenación

var e = "5";
var f = Number(e);

console.log(e);
console.log(typeof f); //Es un number porque el método Number() lo convierte explícitamente
