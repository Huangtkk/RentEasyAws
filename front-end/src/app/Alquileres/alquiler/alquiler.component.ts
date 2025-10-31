import { Component, Input } from '@angular/core';
import { Vehiculos } from '../../Vehiculos/Interfaces/vehiculos.interface';
import { RegistroService } from '../../Vehiculos/registro/services/registro.service';
import { Alquileres } from '../interface/alquiler.interface';
import { Clientes } from '../../Cliente/interface/clientes.interface';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { AlquilerService } from '../services/alquiler.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  constructor(private AlquieresVehiculo:RegistroService, private Clientecedula:ClienteService,private AlquilerServicio:AlquilerService,private datePipe: DatePipe){}
   

   empleadoStorage = JSON.parse(localStorage.getItem('empleado')!);

  @Input() Alquiler: Alquileres = {
    Fecha_Emision:new Date(),
    Fecha_Contrato:new Date(),
    Id: 0,
    KmEmision:0 ,
    KmRecepcion:null,
    KmRecorridos:null,
    Cargos_Adicionales:null,
    Placa_Vehiculo: '',
    Cc_Clientes: '',
    Id_Empleados:this.empleadoStorage.Id,
    Total:null,
    Valor_Inicial: 0,
    Disponible: 'SI',
    Fecha_Recepcion:null,
    Pago_Inicial:0
  }

  @Input() BuscarPorCedula:string='';
  @Input() BuscarPorPlaca:string='';

  Vehiculos: Vehiculos[] = [];
  Clientes: Clientes[]=[];

  ngOnInit(): void {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
  
     this.CargarVehiculo();
     this.CargarCliente();
     
   }

   RegistrarAlquiler(){
        
     
   
    this.AlquilerServicio.RegistrarAlquiler(this.Alquiler)
    .subscribe(resp => {
        console.log(resp);
        Swal.fire('Mensaje', resp);
    }, error => {
        const errorMessage = error.error;
        Swal.fire({
            text: ` ${errorMessage}`,
            confirmButtonText: 'Aceptar'
        });
        return;
    });
      this.limpiarAlquiler()
   }

  CargarVehiculo(){

    this.AlquieresVehiculo.ConsultarVehiculo().subscribe(
      (listVehiculo:Vehiculos[] | null) => {

        if (listVehiculo != null) {

          if (this.BuscarPorPlaca!=''){
            this.Vehiculos= listVehiculo.filter(item => item.Placa.toLocaleUpperCase().startsWith(this.BuscarPorPlaca.toLocaleUpperCase()));
          }

          console.log('Resultado de la consulta de placas:', listVehiculo);
       
        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );
  }

  CargarCliente(){

    this.Clientecedula.ConsultarCliente().subscribe(
      (listCedula:Clientes[] | null) => {

        if (listCedula != null) {

          if (this.BuscarPorCedula!=''){
            this.Clientes= listCedula.filter(item => item.Cc.startsWith(this.BuscarPorCedula));
          }
          
          console.log('Resultado de la consulta de Cedulas:', listCedula);
        }

      },
      (error: any) => {
        console.error('Error al consultar Cedulas:', error);
      }
    );
  }

  limpiarAlquiler(){
    this.Alquiler.Cc_Clientes='';
    this.Alquiler.Placa_Vehiculo='';
  }
}
