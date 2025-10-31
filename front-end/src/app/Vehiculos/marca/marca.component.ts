import { Component, Input } from '@angular/core';
import { MarcaService } from './services/marca.service';
import { Marcas } from '../Interfaces/vehiculos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {

  constructor(private marcaService:MarcaService){}

  @Input() Marca:Marcas = {
    Id_Marca:0,
    Nombre:'',
    Disponible:'SI'
     
  }

  ConsultarMarcas(){
    console.log(this.marcaService.Marcas)
  }

  AgregarMarca(){

  

    this.marcaService.RegistrarMarca(this.Marca)
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

    this.borrardatosmarca();

  }
  
  borrardatosmarca(){
    this.Marca.Nombre='';
  }
 
}
