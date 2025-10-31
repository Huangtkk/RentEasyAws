import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/ServiceCrud/crud.service';
import { Empleados } from 'src/app/Empleados/interface/empleados.interface';

@Injectable()
export class EmpleadosService extends CrudService<Empleados> {

  Empleado:Empleados={
    Correo: '',
    Clave: '',
    Id: 0,
    Id_Cargo: 0,
    Disponible: 'SI'
  }

  setEmpleado(Empleado:Empleados){
    this.Empleado=Empleado;
  }


  RegistrarEmpleado(EmpleadosRecibidos:Empleados) {

    const body = { Correo:EmpleadosRecibidos.Correo,Clave:EmpleadosRecibidos.Clave,Id:EmpleadosRecibidos.Id,Id_Cargo:EmpleadosRecibidos.Id_Cargo,Disponible:EmpleadosRecibidos.Disponible };

    return this.Agregar(body,'AddEmpleado');
  }

  ConsultarEmpleados(){
    return this.Consultar('getEmpleado');
  }




  ActualizarEmpleado(EmpleadosRecibidos:Empleados){
    const body = { Correo:EmpleadosRecibidos.Correo,Clave:EmpleadosRecibidos.Clave,Id:EmpleadosRecibidos.Id,Id_Cargo:EmpleadosRecibidos.Id_Cargo,Disponible:EmpleadosRecibidos.Disponible };
    
    return this.Actualizar(body,'UpdateEmpleado')
   
  }

  EliminarEmpleado(EmpleadosRecibidos:Empleados){

    

    return this.Eliminar(EmpleadosRecibidos.Id,'DeleteEmpleado')
  }

  BuscarEmpleado(EmpleadosRecibidos:Empleados){

    const body = { Correo:EmpleadosRecibidos.Correo.toUpperCase(),Clave:EmpleadosRecibidos.Clave.toUpperCase(),Id:EmpleadosRecibidos.Id,Id_Cargo:EmpleadosRecibidos.Id_Cargo,Disponible:EmpleadosRecibidos.Disponible, };

    return this.BuscarUsuario(body,'BuscarEmpleado');
    
  } 

} 
