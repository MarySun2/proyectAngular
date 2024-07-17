import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; // Importa AngularFireModule para Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa AngularFireAuthModule para autenticación con Firebase
import { environment } from '../environments/environments'; // Configuración de Firebase
import { AppComponent } from './app.component'; // Importa tu componente principal
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
    // Otros componentes, directivas y pipes si los tienes
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase con tu configuración
    AngularFireAuthModule,
    FormsModule 
    // Otros módulos necesarios como FormsModule, HttpClientModule, etc.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }