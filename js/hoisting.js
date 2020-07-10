//Hoisting
//Solo sucede en ECMA Script 5 para abajo
//Se refiere cuando las variables y las funciones se declaran antes que se procese/ejecute cualquier tipo de código
//Sucede solo con dos palabras claves "var" y "function"

//Acá devuelve undefined ya que se llama antes la variable en el console.log antes de declararla e inicializarla
console.log(myName); //Cuando lee esto, no reconoce la variable y le pone undefined y lo pinta así undefined
var myName = "David"; //Después le asigna el valor

//Sucede con funciones también
hey(); //Si llamamos una función antes de declararlas si la va a ejecutar siempre y cuando las variables estén declaradas/inicializadas antes de mandar a llamar esa función

//Las funciones se declaran antes que las variables
function hey() {
  console.log(`Hola ${myNameTwo}`); //Acá pinta "Hola undefined" porque las variables y las funciones se procesan antes de ejecutar el código
}

var myNameTwo = "David";
