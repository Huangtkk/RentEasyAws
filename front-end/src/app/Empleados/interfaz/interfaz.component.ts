import { Component } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {

  constructor(private EmpleadoServicio:EmpleadosService){};

  MostrarComponenteRVehiculo: boolean =false;
  MostrarComponenteRCliente: boolean= false;
  MostrarComponenteRCategorias:boolean=false;
  MostrarComponenteRTarifas:boolean=false;
  MostrarComponenteRAlquiler:boolean=false;
  MostrarComponenteIConsulta:boolean=false;
  MostrarComponenteREmpleado:boolean=false;
  MostrarComponenteRCargo:boolean=false;

  TipoEmpleado:string='';

  ngOnInit() {
    this.verificarTipoUsuario();
  }
  

  verificarTipoUsuario() {
    this.EmpleadoServicio.BuscarEmpleado(this.EmpleadoServicio.Empleado)
      .subscribe(resp => {
        console.log(resp);
  
        if (resp && (resp.Administracion === 'EA')) {
          console.log('El usuario es Administrador');
          this.TipoEmpleado = 'EA';
        } else if (resp && (resp.Administracion === 'EN')) {
          console.log('El usuario es Empleado Normal');
          this.TipoEmpleado = 'EN';
        }
        // Puedes realizar más acciones o asignaciones aquí según tu lógica
      });
  }






  CargarREmpleado():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=true;
    this.MostrarComponenteRCargo=false;
  }

  CargarRVehiculo():void {
    this.MostrarComponenteRVehiculo=true;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }

  CargarRCliente():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= true;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }
  CargarRCategorias():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=true;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }
  CargarRTarifas():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarRAlquiler():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarIConsulta():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteIConsulta=true;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarRCargo():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=true;
  }

}
