let alumno= new Alumno("Pepe","Feliz","12-07-1999","45228902","1004");

console.log(alumno);

let materia = new Materia("fisica","lu y mie 19:00 a 22:00"); //CLASS MATERIA

materia.addNota(9);

console.log(materia);

materia.addNota(8);

console.log(materia);

let promedioMateria = materia.calcularPromedio();//LO PEDI , SE VA A HACER AUNQUE NO LO PIDA

console.log("promedio por materia",promedioMateria); //no hice el calcularPromedio() dentro del alumnos,primero asigno la materia,saco el promedio por cada una,etc.

alumno.addMateria(materia); //agrego la materia al alumno.Le estoy pasando a Alumno todos los objetos que pertenecen a la clase materia que arriba asigne.

//NO PEDI TODAVIA EL PROMEDIO GRAL. SOLO SAQUE EL PROMEDIO DE UNA MATERIA EN BASE A DOS NOTAS,USANDO UN METODO DE MATERIA.

///////////////////////////////////////////////NUEVA MATERIA-----

let m2 = new Materia("quimica","ma y jue 19:00 a 22:00");

m2.addNota(7);
m2.addNota(5); //se agregan al array

console.log(m2); //me muestra solo lo que asigne al constructor; me muestra el array de notas 7 y 5

let promedioQuimica = m2.calcularPromedio(); //AHI SI ME MUESTRA EL PROMEDIO (6). EL PROMEDIO LO HACE SIEMPRE IGUAL AUNQUE NO ME LO MUESTRE.
console.log("promedio quimica", promedioQuimica)

alumno.addMateria(m2); // me agarra ahora tambien al array quimica!!(con su promedio 6)

let promAlumno= alumno.calcularPromedio(); //EN BASE AL ARRAY materias[] QUE SE COMPONE CON: F(y su promedio) Y Q (y su promedio). 

console.log("promedio Gral", promAlumno);


