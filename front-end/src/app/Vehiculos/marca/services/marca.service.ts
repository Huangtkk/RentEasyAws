
import { Injectable } from '@angular/core';
import { Marcas } from '../../Interfaces/vehiculos.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class MarcaService extends CrudService<Marcas>{

  private _marcas: Marcas[]=[];

  get Marcas(): Marcas[] {
   
    return [...this._marcas]; //Para seguridad, no se acceda facilmente
  }

  RegistrarMarca(MarcaRecibido:Marcas) {

    const body = { Id_Marca:MarcaRecibido.Id_Marca,Nombre: MarcaRecibido.Nombre, Disponible:MarcaRecibido.Disponible };

    return this.Agregar(body,'AddMarca');
  }

  ConsultarMarcas(){
    return this.Consultar('getMarca');
  }
  
  ActualizarMarca(MarcaRecibida:Marcas){
    const body = { Id_Marca:MarcaRecibida.Id_Marca,Nombre: MarcaRecibida.Nombre, Disponible:MarcaRecibida.Disponible };

    return this.Actualizar(body,'UpdateMarca')
  }

  EliminarMarca(MarcaRecibida:Marcas){

    

    return this.Eliminar(MarcaRecibida.Id_Marca,'DeleteMarca')
  }
  

}
