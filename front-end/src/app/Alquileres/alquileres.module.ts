import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { AlquilerComponent } from './alquiler/alquiler.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
       
        AlquilerComponent,
        
    ],
    exports:[
        AlquilerComponent,
    ],
    imports:[
        CommonModule,
        FormsModule
        
    ]

})
export class AlquilerModule{

}