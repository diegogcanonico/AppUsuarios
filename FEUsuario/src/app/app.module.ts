import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { GestionesComponent } from './componentes/gestiones/gestiones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { app_routing } from './app.routes';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    GestionesComponent

  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    app_routing


  ],
  exports:[AppComponent, UsuariosComponent,
  GestionesComponent],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
