import { Injectable } from '@angular/core';
import { TipoVehiculo } from '../../Interfaces/vehiculos.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class TipoVehiculoService extends CrudService<TipoVehiculo> {

  private _TipoVehiculo!: TipoVehiculo;

  get TipoVehiculo(): TipoVehiculo {
    return { ...this._TipoVehiculo }; //Para seguridad, no se acceda facilmente
  }

  RegistrarTipoVehiculo(TipoVehiculoRecibido:TipoVehiculo) {


    this._TipoVehiculo=TipoVehiculoRecibido;
   
    const body = {Id:TipoVehiculoRecibido.Id,Nombre:TipoVehiculoRecibido.Nombre,Disponible:TipoVehiculoRecibido.Disponible };

    return this.Agregar(body,'AddTipoVehiculo');
  }

  ConsultarTipoVehiculo(){
    return this.Consultar('getTipoVehiculo');
  }

  ActualizarTipoVehiculo(TipoVehiculoRecibido:TipoVehiculo){
    const body = {Id:TipoVehiculoRecibido.Id,Nombre:TipoVehiculoRecibido.Nombre,Disponible:TipoVehiculoRecibido.Disponible };


    return this.Actualizar(body,'UpdateTipoVehiculo')
  }

  EliminarTipoVehiculo(TipoVehiculoRecibido:TipoVehiculo){


    return this.Eliminar(TipoVehiculoRecibido.Id,'DeleteTipoVehiculo')
  }


}
