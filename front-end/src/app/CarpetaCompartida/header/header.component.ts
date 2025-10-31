import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  MostrarInterfazEComponent:boolean = false;
  mostrarComponenteReserva: boolean=false;
  mostrarComponenteLoginCl: boolean= false;
  mostrarComponenteInicio:  boolean= true;
  mostrarComponenteEmpleado:boolean=false;
  MostrarComponenteAboutUs: boolean=false;
  MostrarComponenteGaleria:boolean=false;


  actualizarVisibilidadEmpleado(nuevoValor: boolean) {
    this.mostrarComponenteEmpleado = nuevoValor;
    this.MostrarInterfazEComponent=true;
  }
  
  CargarComponenteGaleria(){
    this.mostrarComponenteLoginCl= false;
    this.mostrarComponenteInicio=false;
    this.mostrarComponenteEmpleado=false;
    this.mostrarComponenteReserva=false;
    this.MostrarInterfazEComponent=false;
    this.MostrarComponenteAboutUs=false;
    this.MostrarComponenteGaleria=true;
  }

  CargarComponenteAboutUs(){
    this.mostrarComponenteLoginCl= false;
    this.mostrarComponenteInicio=false;
    this.mostrarComponenteEmpleado=false;
    this.mostrarComponenteReserva=false;
    this.MostrarInterfazEComponent=false;
    this.MostrarComponenteAboutUs=true;
    this.MostrarComponenteGaleria=false;
  }

  CargarComponenteLoginCl(){

    this.mostrarComponenteLoginCl= true;
    this.mostrarComponenteInicio=false;
    this.mostrarComponenteEmpleado=false;
    this.mostrarComponenteReserva=false;
    this.MostrarInterfazEComponent=false;
    this.MostrarComponenteAboutUs=false;
    this.MostrarComponenteGaleria=false;

  }
  CargarComponenteInicio(){

    this.mostrarComponenteLoginCl= false;
    this.mostrarComponenteInicio=true;
    this.mostrarComponenteEmpleado=false;
    this.mostrarComponenteReserva=false;
    this.MostrarInterfazEComponent=false;
    this.MostrarComponenteAboutUs=false;
    this.MostrarComponenteGaleria=false;


  }

  CargarComponenteEmpleado(){
   this.mostrarComponenteEmpleado=true;
   this.mostrarComponenteInicio=false;
   this.mostrarComponenteLoginCl=false
   this.mostrarComponenteReserva=false;
   this.MostrarInterfazEComponent=false;
   this.MostrarComponenteAboutUs=false;
   this.MostrarComponenteGaleria=false;
  }

  CargarComponenteReserva(){
    this.mostrarComponenteEmpleado=false;
    this.mostrarComponenteInicio=false;
    this.mostrarComponenteLoginCl=false
    this.mostrarComponenteReserva=true;
    this.MostrarInterfazEComponent=false;
    this.MostrarComponenteAboutUs=false;
    this.MostrarComponenteGaleria=false;

  }
  

}
