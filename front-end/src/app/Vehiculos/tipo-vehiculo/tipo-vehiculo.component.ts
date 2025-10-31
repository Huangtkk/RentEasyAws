import { Component,Input } from '@angular/core';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';
import { Marcas, TipoVehiculo } from '../Interfaces/vehiculos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-vehiculo',
  templateUrl: './tipo-vehiculo.component.html',
  styleUrls: ['./tipo-vehiculo.component.css']
})
export class TipoVehiculoComponent {

  constructor(private ServicioTipoVehiculo:TipoVehiculoService){}

  @Input() TipoVehiculos:TipoVehiculo = {
    Id: 0,
    Nombre: '',
    Disponible: 'SI'
  }

  
    
  ConsultarTipoVehiculo(){
    console.log(this.ServicioTipoVehiculo.TipoVehiculo)
  }

  RegistrarTipoVehiculo(){

    this.ConsultarTipoVehiculo()
    console.log(this.TipoVehiculos)


    this.ServicioTipoVehiculo.RegistrarTipoVehiculo(this.TipoVehiculos)
    .subscribe(resp => {
        console.log(resp);
        Swal.fire('Mensaje', resp);
    }, error => {
        const errorMessage = error.error;
        Swal.fire({
            text: `Mensaje ${errorMessage}`,
            confirmButtonText: 'Aceptar'
        });
    });
   

    this.borradatos();

    
 } 

 borradatos(){
   this.TipoVehiculos.Nombre='';
 }

 



}
