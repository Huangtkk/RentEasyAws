export interface Marcas{
    Id_Marca:number,
    Nombre:string,
    Disponible:string
  }

  export interface Vehiculos{
    Placa:string,
    Id_Tipovehiculo:number,
    Modelo: string,
    Id_Marca:number,
    Id_Tarifas:number,
    Disponible:string,
    Year:string,
    Url:string
  }

  export interface Tarifas{

    Id:number,
    Nombre:string,
    Precio: number,
    ValorDia:number,
    Disponible:string
  }

  export interface TipoVehiculo{

    Id:number,
    Nombre:string,
    Disponible:string
  }



