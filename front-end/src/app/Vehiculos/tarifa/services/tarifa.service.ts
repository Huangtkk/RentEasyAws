import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/ServiceCrud/crud.service';
import { Tarifas } from '../../Interfaces/vehiculos.interface';

@Injectable()
export class TarifaService extends CrudService<Tarifas> {

  private _Tarifa!: Tarifas;

  get Tarifa(): Tarifas {
    return { ...this._Tarifa }; //Para seguridad, no se acceda facilmente
  }

  RegistrarTarifa(TarifaRecibida:Tarifas) {


    this._Tarifa=TarifaRecibida;
   
    const body = {Id:TarifaRecibida.Id,Nombre:TarifaRecibida.Nombre, Precio:TarifaRecibida.Precio,ValorDia:TarifaRecibida.ValorDia,Disponible:TarifaRecibida.Disponible };

    return this.Agregar(body,'AddTarifa');
  }
  
  ConsultarTarifas(){
    return this.Consultar('getTarifa');
  }

  ActualizarTarifa(TarifaRecibida:Tarifas){
    const body = {Id:TarifaRecibida.Id,Nombre:TarifaRecibida.Nombre, Precio:TarifaRecibida.Precio,ValorDia:TarifaRecibida.ValorDia,Disponible:TarifaRecibida.Disponible };

    return this.Actualizar(body,'UpdateTarifa')
  }

  EliminarTarifa(TarifaRecibida:Tarifas){

    

    return this.Eliminar(TarifaRecibida.Id,'DeleteTarifa')
  }


}
