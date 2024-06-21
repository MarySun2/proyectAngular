import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Añade el módulo de enrutamiento aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
