		
		class Alumno extends Persona{

			constructor(nombre,apellido,fecha,dni,legajo){

							super(nombre,apellido,fecha,dni); //LLAMO AL CONSTURCTOR DEL PADRE
							this._legajo=legajo;
							this._colegio;
							this._materias = [];//esta vacio , le estoy creando , lo doy de alta.  

			}


			
			set legajo(value){
								this._legajo = value;


			}				


			get legajo(){
								return this._legajo;
			}


			addMateria(materia){ //materia es un objeto literal, yo voy a ir pusheando la materia

						this._materias.push(materia);  //le estoy pasando todos los objetos que pertenecen a la clase materia

			}	

			/**
			* calcula el promedio gral. del alumno
			* Return numeric
			**/

			calcularPromedio(){ //calculo  promedio gral.

							let largo = this._materias.length; //materias es el array arriba. ME AGARRA FISICA Y QUIMICA.
							let total = 0;


							for (var i = 0; i < largo; i++) {
								 
								total +=this._materias[i].calcularPromedio(); // calcularPromedio=Gral. dek alumno.ES EL PROMEDIO DE CADA UNA DE LAS MATERIAS(??LLAMO A LA CLASE materias[i] Y AL METODO DE CALCULAR PROMEDIO.promedio a su vez sale de clase materias

								}	
//PREGUTAR

							let promedio = total/largo; //los puntos divididos la cant. de materias
							
							return promedio;	

			}


		}

		//caracteristicas distintas del alumno: legajo+curso,materias,etc.