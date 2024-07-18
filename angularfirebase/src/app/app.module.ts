import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; // Importa AngularFireModule para Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa AngularFireAuthModule para autenticación con Firebase
import { environment } from '../environments/environments'; // Configuración de Firebase
import { AppComponent } from './app.component'; // Importa tu componente principal
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

//Mensajes dee error con toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
    // Otros componentes, directivas y pipes si los tienes
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase con tu configuración
    AngularFireAuthModule,
    FormsModule ,
    RouterModule.forRoot(routes),
    HomeComponent,
    SettingsComponent,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 2000,      // en segundos
      positionClass: 'Toast-top-center',
    }) // ToastrModule added
    // Otros módulos necesarios como FormsModule, HttpClientModule, etc.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }