import { RouterModule,Routes} from '@angular/router';
import {UsuariosComponent} from './componentes/usuarios/usuarios.component';
import {GestionesComponent} from './componentes/gestiones/gestiones.component';


const app_routes: Routes = [
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'gestiones', component: GestionesComponent},
    { path: '**', pathMatch: 'full', redirectTo:'usuarios'}

];


export const app_routing = RouterModule.forRoot(app_routes);