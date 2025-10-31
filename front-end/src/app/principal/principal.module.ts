import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { PrincipalComponent } from './principal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        PrincipalComponent,

        
    ],
    exports:[
        PrincipalComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]

})
export class PrincipalModule{

}