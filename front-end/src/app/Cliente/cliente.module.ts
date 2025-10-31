import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './InicioSesionCl/inicio-sesion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
       
        RegistroComponent,
        InicioSesionComponent,
        
    ],
    exports:[
        RegistroComponent,
        InicioSesionComponent,
    ],
    imports:[
        CommonModule,
        FormsModule
    ]

})
export class ClienteModule{

}