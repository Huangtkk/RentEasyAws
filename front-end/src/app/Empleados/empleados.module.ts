import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { InicioSesionEmpComponent } from './inicio-sesion-emp/inicio-sesion-emp.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { VehiculoModule } from '../Vehiculos/vehiculos.module';
import { ClienteModule } from '../Cliente/cliente.module';
import { AlquilerModule } from '../Alquileres/alquileres.module';
import { ConsultaModule } from '../Consultas/consultas.module';
import { RegistroempleadosComponent } from './registroempleados/registroempleados.component';
import { FormsModule } from '@angular/forms';







@NgModule({
    declarations:[
       
      
        InicioSesionEmpComponent,
        InterfazComponent,
        RegistroempleadosComponent,
      

        
        
    ],
    exports:[
        
        InicioSesionEmpComponent,
        InterfazComponent,

    ],
    imports:[
        CommonModule,
        VehiculoModule,
        ClienteModule,
        AlquilerModule,
        ConsultaModule,
        FormsModule
 
    
        
  
    ]

})
export class EmpleadoModule{

}