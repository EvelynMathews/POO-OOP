class profesor extends persona{

				constructor(nombre,apellido,fecha,dni){

							super(nombre,apellido,fecha,dni);

							this._sueldo;

				}

				set nombre(value){
  								this._nombre = value	

  				}

  				get nombre(){
  								return this._nombre;
  				}



}