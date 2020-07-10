var estudiantes = ["David", "Alexander", "María", "Rosa"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}
