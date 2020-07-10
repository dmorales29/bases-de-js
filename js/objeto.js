var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  //Las funciones dentro de una propiedad dentro de un objeto son métodos de objetos
  //Para llamar el método se debe llamar como si fuera una función miAuto.detalleDelAuto()
  //El this es una variable que hace referencia al objeto padre (miAuto)
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};

//Para acceder a las propiedades se coloca .
console.log(miAuto.marca);
