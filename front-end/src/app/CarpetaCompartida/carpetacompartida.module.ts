import {CommonModule} from '@angular/common';
import {NgModule} from  '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmpleadoModule } from '../Empleados/empleados.module';
import { ClienteModule } from '../Cliente/cliente.module';
import { PrincipalModule } from '../principal/principal.module';
import { ReservasModule } from '../Reservas/reservas.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { VehiculoModule } from '../Vehiculos/vehiculos.module';


@NgModule({
    declarations:[
       
        HeaderComponent,
        FooterComponent,
        AboutUsComponent,

        
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        AboutUsComponent,
    ],
    imports:[
        CommonModule,
        EmpleadoModule,
        ClienteModule,
        PrincipalModule,
        ReservasModule,
        VehiculoModule,
    ]

})
export class CarpetaCompartidaModule{

}