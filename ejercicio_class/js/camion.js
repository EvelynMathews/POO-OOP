class Camion{

			constructor(patente="", ejes){
					this._ejes=ejes;//ATRIBUTO
					this._velocidad;	
					this._patente=patente;
			}


set patente(value){ //DA UN VALOR O LO ACTUALIZA.por si quiero modificar el valor que le di

	this._patente=value;
}

get patente(){ //metodo. lo llamo al metodo sin patente
		return this._patente; //ese "_" es para evitar referencias circulares
}

//metodo para recuperar la patente.

getPatente(){

	return this._patente
}





/**
*
**/

		//SACAR VELOCIDAD EN LA QUE ESTA ANTES DE ACELERAR

	get velocidad(){

				return this._velocidad;
	}	

	acelerar(aceleracion){

			this._velocidad+=aceleracion; //velocidad es un atributo de la clase
	}

	frenar(){

				this._velocidad=0;
	}

   
}
