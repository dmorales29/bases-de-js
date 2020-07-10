//Las condicionales son reglas para validar si es verdadero o falso
if (false) {
  console.log("Hola");
} else {
  console.log("David");
}

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("No puedes votar");
}

//Operador ternario
//Condición ? true : false;

var numero = 1;
var resultado =
  numero === 1 ? console.log("Soy un 1") : console.log("No soy un 1");
