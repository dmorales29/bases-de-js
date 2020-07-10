//Operadores binarios, son los que usan un operador "+ - * /" entre dos valores (variables)
3 + 2;
50 - 10;
10 * 20;
20 / 2;

//Se puede usar en strings y no solo en números
"David " + "Morales";

//El caracter ! es para negar algo, son llamados "Unary operator"
console.log(!false); //Por lo tanto ! niega falso pintándolo true

//El == es para comparar el "valor" y no el tipo de valor
console.log(3 == "3");

//El === es para comparar el el tipo de valor y el valor sean iguales
console.log(3 === "3");

console.log(5 < 3);
console.log(5 > 3);
console.log(5 <= 6); //Hace dos validaciones la de < y si es =
console.log(5 >= 6); //Hace dos validaciones la de > y si es =

//2 && 2; //Valida si a y b son verdad, si es así se va cumplir la condición sino no
//a || b; //Valida si a o b es verdad, si se cumple una de las dos afirmaciones la condición se cumple, si ninguna es verdad no se cumple

var edad = 40;
edad++; //Incrementa una unidad
edad += 2; //Incrementa el valor 2
