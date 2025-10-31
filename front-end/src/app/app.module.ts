import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ClienteModule } from './Cliente/cliente.module';
import { PrincipalModule } from './principal/principal.module';

import { AlquilerModule } from './Alquileres/alquileres.module';
import { VehiculoModule } from './Vehiculos/vehiculos.module';
import { EmpleadoModule } from './Empleados/empleados.module';
import { ConsultaModule } from './Consultas/consultas.module';
import { CarpetaCompartidaModule } from './CarpetaCompartida/carpetacompartida.module';
import { ReservasModule } from './Reservas/reservas.module';
import { MarcaService } from './Vehiculos/marca/services/marca.service';
import { TipoVehiculoService } from './Vehiculos/tipo-vehiculo/services/tipo-vehiculo.service';
import { ClienteService } from './Cliente/services/cliente.service';
import { RegistroService } from './Vehiculos/registro/services/registro.service';
import { TarifaService } from './Vehiculos/tarifa/services/tarifa.service';
import { ReservasService } from './Reservas/services/reservas.service';
import { EmpleadosService } from './Empleados/services/empleados.service';
import { AlquilerService } from './Alquileres/services/alquiler.service';
import { CargosService } from './Empleados/services/cargos.service';
import { DatePipe } from '@angular/common';








@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    PrincipalModule,
    AlquilerModule,
    VehiculoModule,
    EmpleadoModule,
    ConsultaModule,
    CarpetaCompartidaModule,
    ReservasModule,
    CarpetaCompartidaModule,

    

    
  ],
  providers: [MarcaService,TipoVehiculoService,ClienteService,RegistroService,TarifaService,ReservasService,EmpleadosService,AlquilerService,CargosService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
