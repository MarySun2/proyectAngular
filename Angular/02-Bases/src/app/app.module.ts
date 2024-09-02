import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Heroes/hero/hero.component';
import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './counter/counter.module';



@NgModule({
  declarations: [
    AppComponent,

    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // para otros modulos
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
