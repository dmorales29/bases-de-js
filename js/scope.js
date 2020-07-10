//Scope global
var myName = "David";

function nombre() {
  //Scope local
  var apellido = "Alexander";
  console.log(myName + " " + apellido);

  //Tenemos accseso al scope global de la variable myName en scope local
  console.log(myName);
}

nombre();

//No existe la variable apellido en scope global porque es del scope local
console.log(apellido);
