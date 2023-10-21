import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//IMPORT PARA EL TITULO
import { TitleService } from './services/title.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component'; 
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component'; 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UserPerfilComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    //POSNE EL TITULO EN CADA VENTANA
    this.titleService.setTitle('Título de la Página de Inicio');
  }
 }
