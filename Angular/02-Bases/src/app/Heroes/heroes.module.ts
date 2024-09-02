import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";



@NgModule({
  //Exportarlo al mundo exterior
  exports:[
    HeroComponent,
    ListComponent
  ],

  declarations: [
    HeroComponent,
    ListComponent
  ],

  imports: [
    CommonModule
  ],
})

export class HeroesModule {

}
