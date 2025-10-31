import { Injectable } from '@angular/core';
import { Clientes } from '../interface/clientes.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class ClienteService extends CrudService<Clientes> {

  private _Cliente: Clientes[] = [];

  get Clientes(): Clientes[] {

    return [...this._Cliente]; //Para seguridad, no se acceda facilmente
  }

  RegistrarCliente(ClienteRecibido: Clientes) {

    const body = {
      Nombre_Completo: ClienteRecibido.Nombre_Completo,
      Cc: ClienteRecibido.Cc,
      Fecha_Nacimiento: ClienteRecibido.Fecha_Nacimiento,
      N_Licencia: ClienteRecibido.N_Licencia,
      Disponible: ClienteRecibido.Disponible,
      Correo: ClienteRecibido.Correo,
      Contrasena: ClienteRecibido.Contrasena,
      Telefono:ClienteRecibido.Telefono
    };

    return this.Agregar(body, 'AddCliente');
  }

  ConsultarCliente() {
    return this.Consultar('getCliente');
  }

  ActualizarCliente(ClienteRecibido: Clientes){

    const body = {
      Nombre_Completo: ClienteRecibido.Nombre_Completo,
      Cc: ClienteRecibido.Cc,
      Fecha_Nacimiento: ClienteRecibido.Fecha_Nacimiento,
      N_Licencia: ClienteRecibido.N_Licencia,
      Disponible: ClienteRecibido.Disponible,
      Correo: ClienteRecibido.Correo,
      Contrasena: ClienteRecibido.Contrasena,
      Telefono:ClienteRecibido.Telefono
    };
    
    return this.Actualizar(body,'UpdateCliente')
  }
  EliminarCliente(ClienteRecibido: Clientes){

    

    return this.Eliminar(ClienteRecibido.Cc,'DeleteCliente')
  }


  BuscarCliente(ClienteRecibido: Clientes){
    
    const body = {
      Nombre_Completo: ClienteRecibido.Nombre_Completo,
      Cc: ClienteRecibido.Cc,
      Fecha_Nacimiento: ClienteRecibido.Fecha_Nacimiento,
      N_Licencia: ClienteRecibido.N_Licencia,
      Disponible: ClienteRecibido.Disponible,
      Correo: ClienteRecibido.Correo,
      Contrasena: ClienteRecibido.Contrasena,
      Telefono:ClienteRecibido.Telefono
    };

    console.log(body)

    

    return this.BuscarUsuario(body,'BuscarCliente');

  }





}
