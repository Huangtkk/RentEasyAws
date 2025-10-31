import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Clientes } from '../interface/clientes.interface';
import Swal from 'sweetalert2';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  
  @Output() cambiarVisibilidadComponenteCliente = new EventEmitter<boolean>();
  constructor(private ClienteService:ClienteService){};

  @Input() Clientes:Clientes = {
    Nombre_Completo: '',
    Cc: '',
    Fecha_Nacimiento: new Date(),
    N_Licencia: '',
    Disponible: '',
    Correo:'',
    Contrasena: '',
    Telefono:''
  }
   
  BuscarCliente(){
    
     /* if(this.Clientes.Correo.trim()=='' || this.Clientes.Contrasena.trim()==''){
      Swal.fire({
        title: 'Oops!',
        text: 'Si entro aqui con o sin datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });

      return;
    }  */
    this.ClienteService.BuscarCliente(this.Clientes).subscribe(resp=>{
      console.log(resp)
      if(resp){
        this.cambiarVisibilidadComponenteCliente.emit(false);
      }
      else{
        Swal.fire({
          text: 'FAVOR VERIFIQUE EL CORREO Y/O CONTRASEÑA',
          confirmButtonText: 'Aceptar'
        });

      }

    });
    
   this.BorrarDatoCliente();
    


  } 

  




  BorrarDatoCliente(){
    this.Clientes.Contrasena='';
    this.Clientes.Correo='';
    
  }
  

}
