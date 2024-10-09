import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app
import localeEsVe from '@angular/common/locales/es-VE'
import localeFrCa from '@angular/common/locales/fr-CA'
import localeENUg from '@angular/common/locales/en-UG'

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsVe);
registerLocaleData( localeFrCa);
registerLocaleData( localeENUg);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  // Son como servicios
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-VE' // Establece el locale para Venezuela
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
