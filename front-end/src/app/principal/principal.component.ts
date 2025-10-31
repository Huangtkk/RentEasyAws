import { Component, Input } from '@angular/core';
import { RegistroService } from '../Vehiculos/registro/services/registro.service';
import { Vehiculos } from '../Vehiculos/Interfaces/vehiculos.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private VehiculosServicio: RegistroService) { }

  // Agregar una clase al contenedor principal para usar el sistema de cuadrícula de Bootstrap

  

  ListaVehiculos:Vehiculos[]=[];

 @Input() BuscarPorModelo:string='';


 // Variable para controlar la cantidad de vehículos a mostrar
 cantidadVehiculosAMostrar = 12;

  ngOnInit(): void {

    this.CargarVehiculos();


  }


  cargarMasVehiculos() {
    this.cantidadVehiculosAMostrar += 12; // Puedes ajustar la cantidad según tus necesidades
  }

  CargarVehiculos() {

    this.VehiculosServicio.ConsultarVehiculo().subscribe(
      (ListVehiculos: Vehiculos[] | null) => {

        if (ListVehiculos != null) {

          if (this.BuscarPorModelo==''){
            this.ListaVehiculos=ListVehiculos;
          }
          else{
            console.log('hola')
            this.ListaVehiculos=ListVehiculos.filter(item => item.Modelo.toLocaleUpperCase().startsWith(this.BuscarPorModelo.toLocaleUpperCase()));
          }
           

        }

      }

    )

  }




// ...



}
