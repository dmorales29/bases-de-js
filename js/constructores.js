//this hace referencia a la función constructora auto
//this.marca, acá marca es la propiedad
//El = marca es el valor del parámetro
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//El operador new crea una nueva instancia de nuestra función constructora
//Una instancia es generar un objeto que deriva de otro objeto
var autoNuevo = new auto("Tesla", "Model 3", "2020");
var autoNuevo2 = new auto("Tesla", "Modelo X", "2018");
var autoNuevo3 = new auto("Toyota", "Corolla", "2020");
