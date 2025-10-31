import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
    declarations:[
       
        ReservaComponent,
        
    ],
    exports:[
        ReservaComponent,
    ],
    imports:[
        CommonModule,
       
    ]

})
export class ReservasModule{

}