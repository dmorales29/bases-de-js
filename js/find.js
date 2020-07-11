var articulos = [
  { nombre: "Bici", costo: "3000" },
  { nombre: "Tv", costo: "2500" },
  { nombre: "Libro", costo: "320" },
  { nombre: "Celular", costo: "1000" },
  { nombre: "Laptop", costo: "2000" },
  { nombre: "Teclado", costo: "500" },
  { nombre: "Audífonos", costo: "1700" },
];

//find() valora si es true o false para encontrar algo en el array
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Tv";
});

//forEach() no genera un array, solo filtra sin modifica y regresa lo solicitado
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//some() hace una validación y regresa verdadero o falso para articulos que cumplan esa validación
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 1000;
});
