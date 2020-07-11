var articulos = [
  { nombre: "Bici", costo: "3000" },
  { nombre: "Tv", costo: "2500" },
  { nombre: "Libro", costo: "320" },
  { nombre: "Celular", costo: "1000" },
  { nombre: "Laptop", costo: "2000" },
  { nombre: "Teclado", costo: "500" },
  { nombre: "Audífonos", costo: "1700" },
];

//el método filter() sirve para filtrar, valida si es verdad o falso y lo mete en un nuevo array de objetos
//adentro va una función con parametro del artículo que vaya filtrando
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

//el método map() sirve para mapear, genera un nuevo array

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
