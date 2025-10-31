import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { InterfazConsultaComponent } from './interfaz-consulta/interfaz-consulta.component';
import { VehiculoModule } from '../Vehiculos/vehiculos.module';
import { ClienteModule } from '../Cliente/cliente.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations:[
       
      
        InterfazConsultaComponent,
        
        
    ],
    exports:[
        
        InterfazConsultaComponent,

    ],
    imports:[
        CommonModule,
        FormsModule
       
    
        
  
    ]

})
export class ConsultaModule{

}