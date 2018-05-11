class Auto{


/**
* CONSTRUCTOR.  NO PUEDO DECLRAR DESPUES.TENGO QUE DECLARAR LAS INSTANCIAS DE OBJETOS EN CONSTRUCTOR DE UNA.
*
***/

			constructor (patente=""){
				this._patente=patente;//ATRIBUTO PATENTE

}

//setters y getters (piso el valor del constructor! le paso los valores que quiero)
//emcapsula para que no acceda directamente al atributo.
//metodo para interactuar con los atributos.
//estos METODOS enmascaran la propiedad y el atributo.
//YO ACCEDO AL ATRIBUTO POR MEDIO DEL METODO="CONSOLE.LOG(AUTO.PATENTE);"

//DESDE JS LE PUEDO PASAR UN VALOR SET A AUTO ASI=
// AUTO.PATENTE="jvjnfjvndf"

set patente(value){ //por si quiero modificar el valor que le di

	this._patente=value;
}

get patente(){ //metodo. lo llamo al metodo sin patente
		return this._patente; //ese "_" es para evitar referencias circulares
}

//metodo para recuperar la patente.

getPatente(){

	return this._patente
}


