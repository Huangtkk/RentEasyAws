import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { FormsModule } from '@angular/forms';


import { VehiculoComponent } from './registro/vehiculo.component';
import { TipoVehiculoComponent } from './tipo-vehiculo/tipo-vehiculo.component';
import { ClienteModule } from '../Cliente/cliente.module';
import { MarcaComponent } from './marca/marca.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { CargosComponent } from '../Empleados/cargos/cargos.component';
import { GaleriaComponent } from './galeria/galeria.component';




@NgModule({
    declarations:[
       
        VehiculoComponent,
        TipoVehiculoComponent,
        MarcaComponent,
        TarifaComponent,
        CargosComponent,
        GaleriaComponent,
        

        
    ],
    exports:[
        VehiculoComponent,
        TipoVehiculoComponent,
        MarcaComponent,
        TarifaComponent,
        CargosComponent,
        GaleriaComponent,
        TipoVehiculoComponent,
     
        
  
    ],
    imports:[
        CommonModule,
        ClienteModule,
        FormsModule,

      
   
    ]

})
export class VehiculoModule{

}