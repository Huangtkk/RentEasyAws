import { Component,EventEmitter,Input,Output } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Empleados } from '../interface/empleados.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion-emp',
  templateUrl: './inicio-sesion-emp.component.html',
  styleUrls: ['./inicio-sesion-emp.component.css']
})
export class InicioSesionEmpComponent {

  @Output() cambiarVisibilidadComponenteEmpleado = new EventEmitter<boolean>();

  constructor(private EmpleadoService:EmpleadosService){};

  @Input() Empleados: Empleados = {
    Correo:'',
    Clave: '',
    Id: 0,
    Id_Cargo: 0,
    Disponible: ''
  }
  

  BuscarEmpleado(){

    if(this.Empleados.Correo.trim()=='' || this.Empleados.Clave.trim()==''){

      Swal.fire({
        title: 'Oops!',
        text: 'FAVOR VERIFIQUE',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });

      return;
    }
    
    this.EmpleadoService.BuscarEmpleado(this.Empleados)
    .subscribe(resp => {


      console.log(typeof(resp));
      

      if  (resp && (resp.Administracion === 'EN' || resp.Administracion === 'EA')) {
        console.log(resp.Administracion);

          // Guardar el JSON en localStorage
        localStorage.setItem('empleado', JSON.stringify(resp));

        this.cambiarVisibilidadComponenteEmpleado.emit(false);
        this.EmpleadoService.setEmpleado(this.Empleados);
        console.log(this.EmpleadoService.Empleado);
    }
      else{
        Swal.fire({
          text: 'FAVOR VERIFIQUE EL CORREO Y/O CONTRASEÑA',
          confirmButtonText: 'Aceptar'
        });

      }
  
     
    });

    
  }


  
 



}
