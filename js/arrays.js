//Son una estructura de datos, guarda objetos, guarda valores (numero, string, objeto)
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

//Para saber cuántos elementos hay en un array usamos length
console.log(frutas.length);

//Para acceder al elemento del array hay que contar a partir de 0
console.log(frutas[3]);

//Para cambiar el array podemos usar métodos
//push() añade elementos al final del array
var masFrutas = frutas.push("Uvas");

//pop() elimina el último elemento del array
var ultimo = frutas.pop("Uvas");

//unshift() agrega un elemento al inicio del array
var nuevaLongitud = frutas.unshift("Uvas");

//shift() elimina el elemento del inicio
var borrarFruta = frutas.shift("Uvas");

//indexOf() nos ayuda a saber la posición del elemento que le pasemos del array
var posicion = frutas.indexOf("Cereza");
