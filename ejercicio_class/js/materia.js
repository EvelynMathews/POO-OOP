
class Materia { //MATERIA LO QUE HACE ES COMPONER AL ALUMNO.

			constructor(nombre,horarios){
	
			this._nombre= nombre;
			this._horarios = horarios;
			this._notas = [];

			}

			set nombre(value){
  								this._nombre = value;	

  				}

  				get nombre(){
  								return this._nombre;
  				}


  				addNota(nota){

  							this._notas.push(nota);

  				}

  				calcularPromedio(){ // CALCULA EL PROMEDIO DE LA MATERIA, CADA UNA.metodo para sacar un promedio de la nota recorriendo el atributo de notas

							let largo = this._notas.length;
							let total = 0;


							for (var i = 0; i < largo; i++) {
								 
								total +=this._notas[i];
								}	


							let promedio = total/largo; //los puntos divididos la cant. de materias
							
							return promedio; 
			}



  				}
