import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/ServiceCrud/crud.service';
import { Cargos } from '../interface/empleados.interface';

@Injectable()
export class CargosService extends CrudService<Cargos> {

  private _Cargos: []=[];

  get Cargos(): Cargos[] {
   
    return [...this._Cargos]; //Para seguridad, no se acceda facilmente
  }

 

  RegistrarCargo(CargosRecibidos:Cargos) {

    const body = { 

      Id_Cargo:CargosRecibidos.Id_Cargo,
      Nombre:CargosRecibidos.Nombre,
      Administracion:CargosRecibidos.Administracion,
      Disponible:CargosRecibidos.Disponible
     };

    return this.Agregar(body,'AddCargo');
  }

  ConsultarCargos(){
    return this.Consultar('getCargo');
  }

  ActualizarCargos(CargosRecibidos:Cargos){
    const body = { 

      Id_Cargo:CargosRecibidos.Id_Cargo,
      Nombre:CargosRecibidos.Nombre,
      Administracion:CargosRecibidos.Administracion,
      Disponible:CargosRecibidos.Disponible
     };

     return this.Actualizar(body,'UpdateCargo')
  }

  EliminarCargo(CargosRecibidos:Cargos){

    

    return this.Eliminar(CargosRecibidos.Id_Cargo,'Deletecargo')
  }

}
